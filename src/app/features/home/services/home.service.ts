import { Injectable } from '@angular/core';
import { MenuOption } from '../models/menu-option';

@Injectable()
export class HomeService {

	options: MenuOption[] = [
		{
			key: 'OID4VP_CBOR_Selectable',
			value: 'Request to share specific attributes from PID',
			isDisabled: false,
		},
		{
			key: 'OID4VP_CBOR',
			value: 'Request for the entire PID in Mdoc format',
			isDisabled: false,
		},
		{
			key: 'OID4VP_JSON',
			value: 'Request for the entire PID in SD-JWT format',
			isDisabled: false,
		},
		{
			key: 'OID4VP_CBOR_AUTHCHAN',
			value: 'Request for the entire PID in Mdoc format with authenticated channel',
			isDisabled: false,
		},
		{
			key: 'OID4VP_JSON_AUTHCHAN',
			value: 'Request for the entire PID in SD-JWT format with authenticated channel',
			isDisabled: false,
		},
		{
			key: 'OID4VP_C',
			value: 'Custom request (for testing)',
			isDisabled: false,
		}
	];
}
