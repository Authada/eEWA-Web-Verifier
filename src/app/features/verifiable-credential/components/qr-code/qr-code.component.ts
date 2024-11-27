import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {CommonModule, KeyValue} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {DataService} from '@app/core/services/data.service';
import {PresentationDefinitionService} from '@app/core/services/presentation-definition.service';
import {forkJoin, interval, Observable, of, ReplaySubject, Subject, take, takeUntil} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {NavigateService} from '@app/core/services/navigate.service';
import {PresentationDefinitionResponse} from '@app/core/models/presentation-definition-response';
import {TransformedResponse} from '../../models/TransformedResponse';
import {JWTService} from '@app/core/services/jwt.service';
import {PresentationsResultsComponent} from '../presentations-results/presentations-results.component';
import {DeviceDetectorService} from '@app/core/services/device-detector.service';
import {LocalStorageService} from '@app/core/services/local-storage.service';
import * as constants from '@core/constants/constants';
import {PresentationsResponse} from '@core/models/presentations-response';
import {CredentialDecodeService} from '@core/services/credential-decode.service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let QRCode: any;

@Component({
	selector: 'vc-qr-code',
	standalone: true,
	imports: [CommonModule, SharedModule, PresentationsResultsComponent],
	templateUrl: './qr-code.component.html',
	styleUrls: ['./qr-code.component.scss'],
	providers: [PresentationDefinitionService, JWTService, CredentialDecodeService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrCodeComponent implements OnInit, OnDestroy {

	destroy$ = new Subject();
	stopPlay$ = new ReplaySubject(1);
  @ViewChild('qrCode')	qrCode!: ElementRef;
  hasResult = false;
  isDesktop = true;

  results: TransformedResponse = {
  	credentials: [],
  	idToken: []
  };
  displayButtonJWTObject = false;
  presentationDefinition!: PresentationDefinitionResponse;

  redirectUrl!: string;
  scheme!: string;
  private readonly deviceDetectorService!: DeviceDetectorService;
  private readonly jWTService!: JWTService;
  private readonly credentialDecodeService!: CredentialDecodeService;
  private readonly localStorageService!: LocalStorageService;
  constructor (
    private readonly presentationDefinitionService: PresentationDefinitionService,
    private readonly dataService: DataService,
    private readonly navigateService: NavigateService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly injector: Injector,
  ) {
  	this.deviceDetectorService = this.injector.get(DeviceDetectorService);
  	this.jWTService = this.injector.get(JWTService);
  	this.credentialDecodeService = this.injector.get(CredentialDecodeService);
  	this.localStorageService = this.injector.get(LocalStorageService);
  	this.isDesktop = this.deviceDetectorService.isDesktop();
  	if (this.localStorageService.get(constants.SCHEME)) {
  		this.scheme = this.localStorageService.get(constants.SCHEME)?? constants.DEFAULT_SCHEME;
  	} else {
  		this.scheme = constants.DEFAULT_SCHEME;
  	}
  }

  ngOnInit (): void {
  	this.presentationDefinition = this.dataService.QRCode as PresentationDefinitionResponse;

  	if (!this.presentationDefinition) {
  		this.navigateService.goHome();
  	} else {
  		this.displayButtonJWTObject = false;
  		this.redirectUrl = this.buildQrCode(this.presentationDefinition);

  		if (this.deviceDetectorService.isDesktop()) {
  			this.setUpQrCode(this.redirectUrl);
  			this.pollingRequest(this.presentationDefinition.presentation_id);
  		}
  	}
  }

  setUpQrCode (qr: string) {
  	new QRCode(document.getElementById('qrcode'), {
  		text: qr,
  		correctLevel: QRCode.CorrectLevel.L,
  	});
  }

  pollingRequest (presentation_id: string) {
  	const source = interval(2000);
  	source
  		.pipe(
  			takeUntil(this.stopPlay$),
  			take(60)
  		)
  		.subscribe(() => {
  		this.presentationDefinitionService.getWalletResponse(presentation_id).
  				pipe(
  					takeUntil(this.stopPlay$),
  					map((data) => data as PresentationsResponse),
  					switchMap((res: PresentationsResponse) => {
  						const credentials: Observable<KeyValue<string, string>[]>[] = res.credentials ? [...res.credentials.map((it) => {
  							return this.credentialDecodeService.decode(it.format, it.credential);
  						})] : [];
  						return forkJoin({
  							credentials: forkJoin(credentials),
  							idToken: res.id_token ? this.jWTService.decode(res.id_token) : of([]),
  						}).pipe(
  							take(1)
  						);
  					}),
  					map((data) => data as TransformedResponse),
  				)
  				.subscribe(
  				(res: TransformedResponse) =>{
  						this.results = res;
  						const divElement = this.qrCode.nativeElement;
  						divElement.style.display='none';
  						this.hasResult = true;
  						this.changeDetectorRef.detectChanges();
  						this.localStorageService.remove(constants.UI_PRESENTATION);
  						this.stopPlay$.next(1);
  				},
  			);
  		});
  }


  async copyToClipboard () {
  	try {
  		await navigator.clipboard.writeText(this.buildQrCode(this.presentationDefinition));
  	} catch (err) {
  		console.error('Failed to copy: ', err);
  	}
  }
  private buildQrCode (data: {client_id: string, request_uri: string, presentation_id: string}): string {
    return `${this.scheme}?client_id=${data.client_id}&request_uri=${encodeURIComponent(data.request_uri)}`;
  }

  goToLink (url: string) {
  	window.open(url, '_blank');
  }

  ngOnDestroy (): void {
  	this.destroy$.next('');
  	this.destroy$.complete();
  	this.stopPlay$.next('');
  	this.stopPlay$.complete();
  	this.dataService.setQRCode(null);
  }
}
