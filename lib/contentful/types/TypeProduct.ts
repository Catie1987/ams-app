import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypeProductFields {
  name?: EntryFieldTypes.Symbol;
  id: EntryFieldTypes.Symbol;
  packing: EntryFieldTypes.Symbol;
  shelflife: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  specification?: EntryFieldTypes.RichText;
  image?: EntryFieldTypes.AssetLink;
  maker: EntryFieldTypes.Symbol;
}

export type TypeProductSkeleton = EntrySkeletonType<TypeProductFields, 'product'>;
export type TypeProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProductSkeleton, Modifiers, Locales>;

