import { Presentation } from '@app/features/siop-custom/models/Presentation';

/* eslint-disable quotes */
export const EMAIL_PRESENTATION_DEFINITION_SDJWT: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		"id": "ae0a3047-23e4-4fbb-8d70-b8599e8e7649",
		"input_descriptors": [
			{
				"id": "eu.europa.ec.eudi.email.1",
				"name": "Verified Email",
				"purpose": "We need to verify your email address",
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
									"urn:eu.europa.ec.eudi:email:1"
								]
							},
							"intent_to_retain": false
						},
						{
							"path": [
								"$.email"
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
