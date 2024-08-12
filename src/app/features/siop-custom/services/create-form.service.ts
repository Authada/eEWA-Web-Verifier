import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DATAFields } from '@app/core/data/data_fields';

@Injectable()
export class CreateFormService {

	form = new FormGroup({
		fields: new FormArray([])
	});
	constructor () {
		DATAFields.forEach(() => this.items.push(new FormControl()));
	}
	get items (): FormArray {
		return this.form.get('fields') as FormArray;
	}
}
