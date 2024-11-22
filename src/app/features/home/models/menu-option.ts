export type Format = 'MDoc' | 'SD-JWT'
export type Type = 'PID' | 'mDL' | 'Email' | 'MSISDN' | 'Custom' | 'PID Builder'
export type Auth = 'Signed' | 'Authenticated Channel'

export type MenuOption = {
  key?: string,
  type: Type,
  subOptions?: Array<MenuOption>,
  format?: Format,
  auth?: Auth,
}
