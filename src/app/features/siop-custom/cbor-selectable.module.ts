import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { SiopCustomRoutingModule } from './cbor-selectable-routing.module';
import { CreateAScenarioComponent } from './components/create-a-scenario/create-a-scenario.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { WalletLayoutComponent } from '@app/core/layout/wallet-layout/wallet-layout.component';
import { HelperCborSelectableService } from './services/helper-cbor-selectable.service';
import {MatButtonToggleModule} from "@angular/material/button-toggle";


@NgModule({
	declarations: [
		CreateAScenarioComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		SiopCustomRoutingModule,
		WalletLayoutComponent,
		ReactiveFormsModule,
		FormsModule,
		MatExpansionModule,
		SharedModule,
		MatCheckboxModule,
    MatButtonToggleModule,
	],
	providers: [
		HelperCborSelectableService
	]
})
export class SiopCustomModule { }
