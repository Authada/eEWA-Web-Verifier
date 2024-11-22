import { Presentation } from '@app/features/siop-custom/models/Presentation';

/* eslint-disable quotes */
export const MSISDN_PRESENTATION_DEFINITION_SDJWT: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		"id": "ae0a3047-23e4-4fbb-8d70-b8599e8e7649",
		"input_descriptors": [
			{
				"id": "eu.europa.ec.eudi.msisdn.1",
				"name": "Verified MSISDN",
				"purpose": "We need to verify your phone number",
				'format': {
					'vc+sd-jwt': {
						'sd-jwt_alg_values': [
							"ES256",
							"ES384",
							"ES512",
							"EdDSA",
							"ESB256",
							"ESB320",
							"ESB384",
							"ESB512",
						],
						'kb-jwt_alg_values': [
							"ES256",
							"ES384",
							"ES512",
							"EdDSA",
							"ESB256",
							"ESB320",
							"ESB384",
							"ESB512",
						]
					}
				},
				"constraints": {
					"fields": [
						{
							"path": [
								"$.vct"
							],
							"filter": {
								"type": "string",
								"enum": [
									"urn:eu.europa.ec.eudi:msisdn:1"
								]
							},
							"intent_to_retain": false
						},
						{
							"path": [
								"$.phone_number"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.iat"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.exp"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.registered_family_name"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.registered_given_name"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.contract_owner"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.end_user"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.mobile_operator"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.issuing_organization"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.verification_date"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$.verification_method_Information"
							],
							"intent_to_retain": false
						}
					]
				}
			}
		]
	},
	'nonce' : ''
};
