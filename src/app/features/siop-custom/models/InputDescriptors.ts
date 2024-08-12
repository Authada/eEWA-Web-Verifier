import { Constraint } from './Constraint';

export type InputDescriptors = {
  id: string,
  name: string,
  purpose: string,
  format: Format,
  constraints: Constraint
}

type Format = {
  mso_mdoc?: {
    alg: string[]
  },
  'vc+sd-jwt'?: {
    'sd-jwt_alg_values': string[]
    'kb-jwt_alg_values': string[]
  }
}
