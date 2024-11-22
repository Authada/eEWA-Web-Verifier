import { Presentation } from '@app/features/siop-custom/models/Presentation';

/* eslint-disable quotes */
export const PID_PRESENTATION_DEFINITION: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		'id': '32f54163-7166-48f1-93d8-ff217bdb0653',
		'input_descriptors': [
			{
				'id': 'eu.europa.ec.eudi.pid.1',
				'name': 'EUDI PID',
				'purpose': 'We need to verify your identity',
				'format': {
					'mso_mdoc': {
						'alg': [
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
				'constraints': {
					'fields': [
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['family_name']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['given_name']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_date']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['age_over_18']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['age_in_years']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['age_birth_year']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['family_name_birth']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['given_name_birth']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_place']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_country']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_state']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_city']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_address']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_country']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_state']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_city']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_postal_code']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_street']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_house_number']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['gender']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['nationality']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuance_date']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['expiry_date']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuing_authority']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['document_number']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['administrative_number']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuing_country']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuing_jurisdiction']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['source_document_type']"
							],
							'intent_to_retain': false
						}
					]
				}
			}
		]
	},
	'nonce' : ''
};

/* eslint-disable quotes */
export const PID_PRESENTATION_DEFINITION_SDJWT: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		'id': '32f54163-7166-48f1-93d8-ff217bdb0653',
		'input_descriptors': [
			{
				'id': 'eu.europa.ec.eudi.pid.1',
				'name': 'EUDI PID',
				'purpose': 'We need to verify your identity',
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
				'constraints': {
					'fields': [
						{
							"path": [
								"$.vct"
							],
							"filter": {
								"type": "string",
								"enum": [
									"https://metadata-8c062a.usercontent.opencode.de/pid.json",
									"https://example.bmi.bund.de/credential/pid/1.0",
									"urn:eu.europa.ec.eudi:pid:1"
								]
							},
							intent_to_retain: true
						},
						{
							'path': [
								"$.family_name"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.given_name"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.birthdate"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.age_equal_or_over.18"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.age_in_years"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.age_birth_year"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.birth_family_name"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.place_of_birth"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.address"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.nationalities"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.issuing_authority"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.issuing_country"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.source_document_type"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.also_known_as"
							],
							'intent_to_retain': false
						}
					]
				}
			}
		]
	},
	'nonce' : ''
};

/* eslint-disable quotes */
export const PID_PRESENTATION_DEFINITION_AUTHCHAN: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		'id': '32f54163-7166-48f1-93d8-ff217bdb0653',
		'input_descriptors': [
			{
				'id': 'eu.europa.ec.eudi.pid.1',
				'name': 'EUDI PID',
				'purpose': 'We need to verify your identity',
				'format': {
					'mso_mdoc': {
						'alg': [
							"DVS-P256-SHA256-HS256"
						]
					}
				},
				'constraints': {
					'fields': [
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['family_name']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['given_name']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_date']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['age_over_18']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['age_in_years']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['age_birth_year']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['family_name_birth']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
  							"$['eu.europa.ec.eudi.pid.1']['given_name_birth']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_place']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_country']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_state']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['birth_city']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_address']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_country']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_state']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_city']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_postal_code']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_street']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['resident_house_number']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['gender']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['nationality']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuance_date']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['expiry_date']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuing_authority']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['document_number']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['administrative_number']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuing_country']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['issuing_jurisdiction']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudi.pid.1']['source_document_type']"
							],
							'intent_to_retain': false
						}
					]
				}
			}
		]
	},
	'nonce' : ''
};

/* eslint-disable quotes */
export const PID_PRESENTATION_DEFINITION_SDJWT_AUTHCHAN: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		'id': '32f54163-7166-48f1-93d8-ff217bdb0653',
		'input_descriptors': [
			{
				'id': 'eu.europa.ec.eudi.pid.1',
				'name': 'EUDI PID',
				'purpose': 'We need to verify your identity',
				'format': {
					'vc+sd-jwt': {
						'sd-jwt_alg_values': [
							"DVS-P256-SHA256-HS256"
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
				'constraints': {
					'fields': [
						{
							"path": [
								"$.vct"
							],
							"filter": {
								"type": "string",
								"enum": [
									"https://metadata-8c062a.usercontent.opencode.de/pid.json",
									"https://example.bmi.bund.de/credential/pid/1.0",
									"urn:eu.europa.ec.eudi:pid:1"
								]
							},
							intent_to_retain: true
						},
						{
							'path': [
								"$.family_name"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.given_name"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.birthdate"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.age_equal_or_over.18"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.age_in_years"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.age_birth_year"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.birth_family_name"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.place_of_birth"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.address"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.nationalities"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.issuing_authority"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.issuing_country"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.source_document_type"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$.also_known_as"
							],
							'intent_to_retain': false
						}
					]
				}
			}
		]
	},
	'nonce' : ''
};
