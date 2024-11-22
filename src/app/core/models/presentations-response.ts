export type PresentationsResponse = {
  presentation_submission: any,
  credentials?: [Credential],
  id_token?: string
}

export type Credential = {
  format: 'vc+sd-jwt' | 'mso_mdoc',
  credential: string
}
