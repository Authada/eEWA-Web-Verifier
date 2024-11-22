import {Injectable} from '@angular/core';
import {MenuOption} from '../models/menu-option';

@Injectable()
export class HomeService {

	options: MenuOption[] = [
		{
			type: 'PID',
			subOptions: [
				{
					type: 'PID',
					format: 'MDoc',
					subOptions: [
						{
							key: 'OID4VP_CBOR_AUTHCHAN',
							type: 'PID',
							format: 'MDoc',
							auth: 'Authenticated Channel'
						},
						{
							key: 'OID4VP_CBOR',
							type: 'PID',
							format: 'MDoc',
							auth: 'Signed'
						}

					]
				},
				{
					type: 'PID',
					format: 'SD-JWT',
					subOptions: [
						{
							key: 'OID4VP_JSON_AUTHCHAN',
							type: 'PID',
							format: 'SD-JWT',
							auth: 'Authenticated Channel'
						},
						{
							key: 'OID4VP_JSON',
							type: 'PID',
							format: 'SD-JWT',
							auth: 'Signed'
						}
					]
				}
			],
		},
		{
			type: 'mDL',
			subOptions: [
				{
					type: 'mDL',
					format: 'MDoc',
					subOptions: [
						{
							key: 'OID4VP_CBOR_MDL',
							type: 'mDL',
							format: 'MDoc',
							auth: 'Signed'
						}

					]
				}
			],
		},
		{
			type: 'Email',
			subOptions: [
				{
					type: 'Email',
					format: 'SD-JWT',
					subOptions: [
						{
							key: 'OID4VP_JSON_EMAIL',
							type: 'Email',
							format: 'SD-JWT',
							auth: 'Signed'
						}
					]
				}
			],
		},
		{
			type: 'MSISDN',
			subOptions: [
				{
					type: 'MSISDN',
					format: 'SD-JWT',
					subOptions: [
						{
							key: 'OID4VP_JSON_MSISDN',
							type: 'MSISDN',
							format: 'SD-JWT',
							auth: 'Signed'
						}
					]
				}
			],
		},
		{
			key: 'OID4VP_CBOR_Selectable',
			type: 'PID Builder'
		},
		{
			key: 'OID4VP_C',
			type: 'Custom',
		}
	];
}
