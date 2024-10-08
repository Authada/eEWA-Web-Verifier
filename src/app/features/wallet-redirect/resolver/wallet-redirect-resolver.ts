import { inject } from '@angular/core';
import { KeyValue } from '@angular/common';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '@app/core/services/local-storage.service';
import { PresentationDefinitionService } from '@app/core/services/presentation-definition.service';
import { of, Observable, forkJoin, EMPTY } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import * as constants from '@core/constants/constants';
import { PresentationDefinitionResponse } from '@app/core/models/presentation-definition-response';
import { JWTService } from '@app/core/services/jwt.service';
import {PresentationsResponse} from '@core/models/presentations-response';
import {VpTokenDecodeService} from '@core/services/vptoken.decode.service';

export const WalletRedirectResolver: ResolveFn<{vpToken: KeyValue<string, string>[], idToken: KeyValue<string, string>[]}> =
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (route: ActivatedRouteSnapshot, _state: RouterStateSnapshot):
    Observable<{vpToken: KeyValue<string, string>[], idToken: KeyValue<string, string>[]}> => {
    	const services = {
    		definition: inject(PresentationDefinitionService),
    		localStorage: inject(LocalStorageService),
    		vpTokenDecode: inject(VpTokenDecodeService),
    		jWT: inject(JWTService),
    	};

    	let data: PresentationDefinitionResponse;
    	const stData: string | null = services.localStorage.get(constants.UI_PRESENTATION);
    	const responseCode: string = route.queryParams['response_code'];
    	if (stData && responseCode) {
    		data = JSON.parse( stData );
    		return services.definition.getWalletResponseWithCode(data.presentation_id, responseCode)
    			.pipe(
    				switchMap((res: PresentationsResponse) => {
    					const format = res?.presentation_submission?.descriptor_map[0]?.format;
    					return forkJoin({
    						vpToken: res.vp_token ? services.vpTokenDecode.decodeVpToken(format, res.vp_token) : of([]),
    						idToken: res.id_token ? services.jWT.decode(res.id_token) : of([]),
    					}).pipe(
    						take(1)
    					);
    				}),
    			);
    	} else {
    		return EMPTY;
    	}
    };
