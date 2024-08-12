/* eslint-disable quotes */
import {DATAField} from '../models/CBORFields';

export const DATAFields: DATAField[] = [
	{
		id: 1,
		label: 'Family Name',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['family_name']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.family_name"
			],
			intent_to_retain: false
		},
	},
	{
		id: 2,
		label: 'Given Name',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['given_name']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.given_name"
			],
			intent_to_retain: false
		}
	},
	{
		id: 3,
		label: 'Birthdate',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['birth_date']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.birth_date"
			],
			intent_to_retain: false
		}
	},
	{
		id: 4,
		label: 'Age over 18',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['age_over_18']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.age_over_18"
			],
			intent_to_retain: false
		}
	},
	{
		id: 5,
		label: 'Age in years',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['age_in_years']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.age_in_years"
			],
			intent_to_retain: false
		}
	},
	{
		id: 6,
		label: 'Age birth years',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['age_birth_year']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.age_birth_year"
			],
			intent_to_retain: false
		}
	},
	{
		id: 7,
		label: 'Family name birth',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['family_name_birth']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.family_name_birth"
			],
			intent_to_retain: false
		}
	},
	{
		id: 8,
		label: 'Given name birth',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['given_name_birth']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.given_name_birth"
			],
			intent_to_retain: false
		}
	},
	{
		id: 9,
		label: 'Birth place',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['birth_place']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.birth_place"
			],
			intent_to_retain: false
		}
	},
	{
		id: 10,
		label: 'Birth country',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['birth_country']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.birth_country"
			],
			intent_to_retain: false
		}
	},
	{
		id: 11,
		label: 'Birth state',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['birth_state']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.birth_state"
			],
			intent_to_retain: false
		}
	},
	{
		id: 12,
		label: 'Birth city',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['birth_city']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.birth_city"
			],
			intent_to_retain: false
		}
	},
	{
		id: 13,
		label: 'Resident address',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['resident_address']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.resident_address"
			],
			intent_to_retain: false
		}
	},
	{
		id: 14,
		label: 'Resident country',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['resident_country']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.resident_country"
			],
			intent_to_retain: false
		}
	},
	{
		id: 15,
		label: 'Resident state',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['resident_state']"
			],
			intent_to_retain: false
		},

		jsonValue: {
			path: [
				"$.resident_state"
			],
			intent_to_retain: false
		}
	},
	{
		id: 16,
		label: 'Resident city',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['resident_city']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.resident_city"
			],
			intent_to_retain: false
		}
	},
	{
		id: 17,
		label: 'Resident postal code',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['resident_postal_code']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.resident_postal_code"
			],
			intent_to_retain: false
		}
	},
	{
		id: 18,
		label: 'Resident street',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['resident_street']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.resident_street"
			],
			intent_to_retain: false
		}
	},
	{
		id: 19,
		label: 'Resident house number',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['resident_house_number']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.resident_house_number"
			],
			intent_to_retain: false
		}
	},
	{
		id: 20,
		label: 'Gender',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['gender']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.gender"
			],
			intent_to_retain: false
		}
	},
	{
		id: 21,
		label: 'Nationality',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['nationality']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.nationality"
			],
			intent_to_retain: false
		}
	},
	{
		id: 22,
		label: 'Issuance date',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['issuance_date']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.issuance_date"
			],
			intent_to_retain: false
		}
	},
	{
		id: 23,
		label: 'Expiry date',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['expiry_date']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.expiry_date"
			],
			intent_to_retain: false
		}
	},
	{
		id: 24,
		label: 'Issuing authority',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['issuing_authority']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.issuing_authority"
			],
			intent_to_retain: false
		}
	},
	{
		id: 25,
		label: 'Document number',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['document_number']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.document_number"
			],
			intent_to_retain: false
		}
	},
	{
		id: 26,
		label: 'Administrative number',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['administrative_number']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				".administrative_number"
			],
			intent_to_retain: false
		}
	},
	{
		id: 27,
		label: 'Issuing country',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['issuing_country']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.issuing_country"
			],
			intent_to_retain: false
		}
	},
	{
		id: 28,
		label: 'Issuing jurisdiction',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['issuing_jurisdiction']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.issuing_jurisdiction"
			],
			intent_to_retain: false
		}
	},
	{
		id: 28,
		label: 'Source document type',
		cborValue: {
			path: [
				"$['eu.europa.ec.eudiw.pid.1']['source_document_type']"
			],
			intent_to_retain: false
		},
		jsonValue: {
			path: [
				"$.source_document_type"
			],
			intent_to_retain: false
		}
	},
];
