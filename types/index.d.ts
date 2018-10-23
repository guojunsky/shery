/// <reference path="./weapp.d.ts" />
import { ComponentInstance } from './instance';

type Mixins = any[];
type ExternalClasses = string[];
type LooseObject = {
  [key: string]: any;
};
type Relation<Instance> = {
  name?: string;
  type: string;
  linked?: (this: Instance, target?: Weapp.Component) => void;
  unlinked?: (this: Instance, target?: Weapp.Component) => void;
};
type Relations<Instance> = {
  [key: string]: Relation<Instance>;
};
type RecordToAny<T> = { [K in keyof T]: any };
type RecordToReturn<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any ? ReturnType<T[P]> : T[P]
};

export type CombinedComponentInstance<
  Data,
  Props,
  Watch,
  Methods,
  Computed
> = Methods &
  LooseObject &
  Weapp.Component &
  Weapp.FormField &
  ComponentInstance & {
    data: Data & RecordToAny<Props> & RecordToReturn<Computed>;
  };

export type SheryComponentOptions<
  Data,
  Props,
  Watch,
  Methods,
  Computed,
  Instance
> = {
  data?: Data;
  field?: boolean;
  mixins?: Mixins;
  props?: Props & ThisType<Instance>;
  watch?: Watch & ThisType<Instance>;
  computed?: Computed & ThisType<Instance>;
  relation?: Relation<Instance>;
  relations?: Relations<Instance>;
  classes?: ExternalClasses;
  methods?: Methods & ThisType<Instance>;

  // lifetimes
  beforeCreate?: (this: Instance) => void;
  created?: (this: Instance) => void;
  mounted?: (this: Instance) => void;
  destroyed?: (this: Instance) => void;
};
