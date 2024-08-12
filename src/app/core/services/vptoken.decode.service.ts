import {from, of} from 'rxjs';
import {KeyValue} from '@angular/common';
import {SDJwtVcInstance} from '@sd-jwt/sd-jwt-vc';
import {CborDecodeService} from '@core/services/cbor/cbor-decode.service';
import {Injectable} from '@angular/core';

@Injectable()
export class VpTokenDecodeService{
	private readonly cborDecodeService: CborDecodeService = new CborDecodeService();

	private mapValue (key: string, value?: any) {
		if (value instanceof String ||typeof value === 'string') {
			return value as string;
		} else if(value instanceof Array) {
			return JSON.stringify(value);
		} else if(value instanceof Object) {
			return JSON.stringify(value);
		} else if(value instanceof Number || typeof value === 'number') {
			return value.toString();
		} else if(value instanceof Boolean || typeof value === 'boolean') {
			return value? 'true': 'false';
		}
		return 'unparsed';
	}

	private async digest (
		data: string,
		algorithm = 'SHA-256',
	): Promise<Uint8Array> {
		const ec = new TextEncoder();
		const digest = await window.crypto.subtle.digest(algorithm, ec.encode(data));
		return new Uint8Array(digest);
	}
	private readonly sdjwtService = new SDJwtVcInstance(
		{
			hasher: this.digest
		});

	decodeVpToken (format: string, token: string) {
		switch (format) {
		case 'mso_mdoc': {
			return this.cborDecodeService.decode(token);
		}
		case 'vc+sd-jwt': {
			console.log(token);
			return from(this.sdjwtService.decode(token).then( decoded =>{
				console.log(decoded);
				return decoded.getClaims(this.digest);
			}).then((claims) => {
				console.log(claims);
				const entries = Object.entries(claims as object)
					.map((entry) => {
						console.log(entry);
						return ({
							key: entry[0],
							value: this.mapValue(entry[0], entry[1])
						} as KeyValue<string, string>);
					});
				console.log(entries);
				return entries;
			})
			);
		}
		}
		return of([]);
	}

}
