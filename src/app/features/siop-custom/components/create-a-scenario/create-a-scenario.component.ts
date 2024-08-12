import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {catchError} from 'rxjs';
import {PresentationDefinitionResponse} from '@core/models/presentation-definition-response';
import {PresentationDefinitionService} from '@app/core/services/presentation-definition.service';
import {CreateFormService} from '../../services/create-form.service';
import {
	PID_PRESENTATION_DEFINITION,
	PID_PRESENTATION_DEFINITION_AUTHCHAN,
	PID_PRESENTATION_DEFINITION_SDJWT,
	PID_PRESENTATION_DEFINITION_SDJWT_AUTHCHAN
} from '@app/core/data/pid_presentation_definition';
import {DataService} from '@app/core/services/data.service';
import {NavigateService} from '@app/core/services/navigate.service';
import {DATAFields} from '@app/core/data/data_fields';
import {DATAField} from '@app/core/models/CBORFields';
import {HelperCborSelectableService} from '../../services/helper-cbor-selectable.service';
import {LocalStorageService} from '@app/core/services/local-storage.service';
import * as constants from '@core/constants/constants';
import {uuidv4} from '@app/core/utils/uuid';
import {Modification} from '@app/shared/elements/body-actions/models/modification';
import {BodyActionsService} from '@app/shared/elements/body-actions/body-actions.service';
import {Presentation} from '../../models/Presentation';

@Component({
	selector: 'vc-create-a-scenario',
	templateUrl: './create-a-scenario.component.html',
	styleUrls: ['./create-a-scenario.component.scss'],
	providers: [CreateFormService, PresentationDefinitionService],
})
export class CreateAScenarioComponent implements OnInit {

	form!: FormGroup;
	fields: DATAField[];
	requestGenerate = false;
	_format: 'vc+sd-jwt' | 'mso_mdoc' = 'mso_mdoc';
	_type: 'signature' | 'authchan' = 'authchan';
	buttonMode = 'none';
	definition!: Presentation;
	definitionText!: string;
	definitionFields: DATAField[] = [];
	private readonly navigateService!: NavigateService;
	private readonly helperCborSelectableService!: HelperCborSelectableService;
	private readonly localStorageService!: LocalStorageService;
	private readonly bodyActionsService!: BodyActionsService;

	constructor (
    private readonly createFormService: CreateFormService,
    private readonly presentationDefinitionService: PresentationDefinitionService,
    private readonly dataService: DataService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly injector: Injector,
	) {
		this.updateFormatAndType();
		this.definition.nonce = uuidv4();
		this.navigateService = this.injector.get(NavigateService);
		this.helperCborSelectableService = this.injector.get(HelperCborSelectableService);
		this.localStorageService = this.injector.get(LocalStorageService);
		this.bodyActionsService = this.injector.get(BodyActionsService);
		this.form = this.createFormService.form;
		this.fields = DATAFields;
	}

	ngOnInit (): void {
		this.localStorageService.remove(constants.UI_PRESENTATION);
		this.update();
		this.helperCborSelectableService.goNextStep$.subscribe(_ => {
			this.generateCode();
		});
	}

	generateCode () {
		this.requestGenerate = true;
		if (this.convertJSONtoString(this.definition)) {
			this.buttonMode = 'loading';
			this.presentationDefinitionService.generateCode(this.convertJSONtoString(this.definition))
				.pipe(
					catchError((error) => {
						return error;
					})
				)
				.subscribe((data) => {
					this.buttonMode = 'none';
					this.requestGenerate = false;
					this.dataService.setQRCode(data as PresentationDefinitionResponse);
					this.navigateService.navigateTo('/cbor-selectable/verifiable');
					this.changeDetectorRef.detectChanges();
				});
		} else {
			console.log('invalid JSON');
		}
	}

	handle (data: DATAField) {
		if (!this.isExist(data)) {
			this.definitionFields.push(data);
		} else if (this.isExist(data)) {
			this.definitionFields = this.definitionFields.filter((item) => item !== data);
		}
		this.update();
	}

	setFields () {
		this.definition.presentation_definition.input_descriptors[0].constraints.fields = this.definitionFields.map((field) => {
			switch (this._format) {
			case 'vc+sd-jwt':
				return field.jsonValue;
			case 'mso_mdoc':
				return field.cborValue;
			}
		});
	}

	get format () {
		return this._format;
	}

	set format (value: 'vc+sd-jwt' | 'mso_mdoc') {
		this._format = value;
		this.update();
	}

	get type () {
		return this._type;
	}

	set type (value: 'signature' | 'authchan') {
		this._type = value;
		this.update();
	}

	update () {
		this.updateFormatAndType();
		this.setFields();
		this.definitionText = this.convertJSONtoString(this.definition.presentation_definition);
		this.setNextButton();
		this.changeDetectorRef.detectChanges();
	}

	private updateFormatAndType () {
		switch (this._format) {
		case 'mso_mdoc': {
			switch (this._type) {
			case 'authchan':
				this.definition = JSON.parse(JSON.stringify(PID_PRESENTATION_DEFINITION_AUTHCHAN));
				break;
			case 'signature':
				this.definition = JSON.parse(JSON.stringify(PID_PRESENTATION_DEFINITION));
				break;
			}
			break;
		}
		case 'vc+sd-jwt': {
			switch (this._type) {
			case 'authchan':
				this.definition = JSON.parse(JSON.stringify(PID_PRESENTATION_DEFINITION_SDJWT_AUTHCHAN));
				break;
			case 'signature':
				this.definition = JSON.parse(JSON.stringify(PID_PRESENTATION_DEFINITION_SDJWT));
				break;
			}
			break;
		}
		}
		this.definition.nonce = uuidv4();
	}

	convertJSONtoString (obj: object) {
		return JSON.stringify(obj, null, '\t');
	}

	isExist (path: DATAField) {
		const exists = this.definitionFields.filter((item) => item === path);
		return exists.length > 0;
	}

	setNextButton () {
		const modifyData: Modification = {
			id: 'next_button',
			disabled: this.definitionFields.length === 0
		};
		this.bodyActionsService.handelButton$.next(modifyData);
	}

	trackByFn (_index: number, data: DATAField) {
		return data.id;
	}
}
