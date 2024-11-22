import { Presentation } from '@app/features/siop-custom/models/Presentation';

/* eslint-disable quotes */
export const MDL_PRESENTATION_DEFINITION: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		"id": "ae0a3047-23e4-4fbb-8d70-b8599e8e7649",
		"input_descriptors": [
			{
				"id": "org.iso.18013.5.1.mDL",
				"name": "Mobile Driving Licence",
				"purpose": "We need to verify your mobile driving licence",
				"format": {
					"mso_mdoc": {
						"alg": [
							"ES256",
							"ES384",
							"ES512"
						]
					}
				},
				"constraints": {
					"fields": [
						{
							"path": [
								"$['org.iso.18013.5.1']['family_name']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['given_name']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['birth_date']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['issue_date']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['expiry_date']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['age_over_21']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['document_number']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['driving_privileges']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['un_distinguishing_sign']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['administrative_number']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['sex']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['height']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['weight']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['eye_colour']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['hair_colour']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['birth_place']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['resident_address']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['portrait_capture_date']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['nationality']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['resident_city']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['resident_state']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['resident_postal_code']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['resident_country']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['family_name_national_character']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['given_name_national_character']"
							],
							"intent_to_retain": false
						},
						{
							"path": [
								"$['org.iso.18013.5.1']['signature_usual_mark']"
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
