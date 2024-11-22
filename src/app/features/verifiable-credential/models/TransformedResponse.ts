import {KeyValue} from '@angular/common';

export type TransformedResponse = {
  idToken: KeyValue<string, string>[]
  credentials: KeyValue<string, string>[][]
}
