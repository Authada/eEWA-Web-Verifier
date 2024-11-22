import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {WalletRedirectResolver} from './features/wallet-redirect/resolver/wallet-redirect-resolver';
import {PresentationDefinitionService} from './core/services/presentation-definition.service';
import {JWTService} from './core/services/jwt.service';
import {NavigateService} from './core/services/navigate.service';
import {CredentialDecodeService} from '@core/services/credential-decode.service';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{
		path: 'home',
		loadComponent: () => import('./features/home/components/home/home.component').then(c => c.HomeComponent)
	},
	{
		path: 'presentation',
		loadChildren: () => import('./features/presentation-definition/presentation-definition.module')
			.then(m => m.PresentationDefinitionModule)
	},
	{
		path: 'siop',
		loadChildren: () => import('./features/siop/siop.module').then(m => m.SIOPModule)
	},
	{
		path: 'cbor',
		loadChildren: () => import('./features/cbor/cbor.module').then(m => m.CborModule)
	},
	{
		path: 'json',
		loadChildren: () => import('./features/cbor/cbor.module').then(m => m.CborModule)
	},
	{
		path: 'cbor_mdl',
		loadChildren: () => import('./features/cbor/cbor.module').then(m => m.CborModule)
	},
	{
		path: 'json_email',
		loadChildren: () => import('./features/cbor/cbor.module').then(m => m.CborModule)
	},
	{
		path: 'json_msisdn',
		loadChildren: () => import('./features/cbor/cbor.module').then(m => m.CborModule)
	},
	{
		path: 'json_AUTHCHAN',
		loadChildren: () => import('./features/cbor/cbor.module').then(m => m.CborModule)
	},
	{
		path: 'cbor_AUTHCHAN',
		loadChildren: () => import('./features/cbor/cbor.module').then(m => m.CborModule)
	},
	{
		path: 'cbor-selectable',
		loadChildren: () => import('./features/siop-custom/cbor-selectable.module').then(m => m.SiopCustomModule)
	},
	{
		path: 'get-wallet-code',
		loadComponent: () => import('./features/wallet-redirect/wallet-redirect.component').then(c => c.WalletRedirectComponent),
		providers: [PresentationDefinitionService, CredentialDecodeService, JWTService, NavigateService],
		resolve: {
			data: WalletRedirectResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: false, preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
