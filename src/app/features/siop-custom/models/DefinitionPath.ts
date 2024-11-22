import {Filter} from '@features/siop-custom/models/Filter';

export type DefinitionPath = {
  path: string[],
  filter?: Filter,
  intent_to_retain: boolean,
}
