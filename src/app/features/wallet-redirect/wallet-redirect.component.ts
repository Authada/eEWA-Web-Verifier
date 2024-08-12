import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WalletLayoutComponent } from '@app/core/layout/wallet-layout/wallet-layout.component';
import { TransformedResponse } from '../verifiable-credential/models/TransformedResponse';
import { PresentationsResultsComponent } from '../verifiable-credential/components/presentations-results/presentations-results.component';
import {SharedModule} from '@shared/shared.module';
import {BACK_ONLY_ACTIONS} from '@core/utils/pages-actions';
import {NavigateService} from "@core/services/navigate.service";

@Component({
	selector: 'vc-wallet-redirect',
	standalone: true,
	imports: [CommonModule, WalletLayoutComponent, PresentationsResultsComponent, SharedModule],
	templateUrl: './wallet-redirect.component.html',
	styleUrls: ['./wallet-redirect.component.scss']
})
export class WalletRedirectComponent implements OnInit {
	data!: TransformedResponse;
	constructor (
    private readonly activeRoute: ActivatedRoute,
    private readonly navigateService: NavigateService
	) {}
	ngOnInit (): void {
		this.data = this.activeRoute.snapshot.data['data'];
	}

	back (): void {
		this.navigateService.goHome();
	}

	protected readonly BACK_ONLY_ACTIONS = BACK_ONLY_ACTIONS;
}
