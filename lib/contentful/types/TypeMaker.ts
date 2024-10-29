import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypeMakerFields {
  makerName: EntryFieldTypes.Symbol;
  logo?: EntryFieldTypes.AssetLink;
}

export type TypeMakerSkeleton = EntrySkeletonType<TypeMakerFields, 'manufacture'>;
export type TypeMaker<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMakerSkeleton, Modifiers, Locales>;

