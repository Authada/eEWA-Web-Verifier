import { DefinitionPath } from '@app/features/siop-custom/models/DefinitionPath';

export type DATAField = {
  id: number,
  label: string,
  cborValue?: DefinitionPath
  jsonValue?: DefinitionPath
}
