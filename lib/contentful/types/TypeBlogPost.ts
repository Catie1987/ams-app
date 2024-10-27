import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeBlogPostFields {
	title?: EntryFieldTypes.Symbol
	slug: EntryFieldTypes.Symbol
	content?: EntryFieldTypes.RichText
	coverImage?: EntryFieldTypes.AssetLink
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, 'post'>
export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
	TypeBlogPostSkeleton,
	Modifiers,
	Locales
>