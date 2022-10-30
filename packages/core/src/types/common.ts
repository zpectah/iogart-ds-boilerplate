export type Booleanish = boolean | 'true' | 'false';

export type CommonObjectType = {
  [k: string]: number | string | boolean | undefined | CommonObjectType;
};
