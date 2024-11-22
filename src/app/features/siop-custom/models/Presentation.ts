import {PresentationDefinition} from './PresentationDefinition';

export type Presentation = {
  type: string,
  presentation_definition: PresentationDefinition,
  nonce: string
  clientid_scheme_override?: 'pre-registered' | 'x509_san_dns'
  response_mode?: 'direct_post' | 'direct_post.jwt'
  clientid_override?: string
}
