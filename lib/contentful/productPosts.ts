import { TypeMakerSkeleton, TypeProductSkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './client'
import { ContentImage, parseContentfulContentImage } from './contentImage'
import { mapToContentfulLocale } from './types/locales'

type ProductPostEntry = Entry<TypeProductSkeleton, undefined, string>

export interface ProductPost {
	name: string
	id: string
    packing: string
	shelflife: string
    image: ContentImage | null
	description: RichTextDocument | null
	specification: RichTextDocument | null
	maker: string
	
}

export function parseContentfulProductPost(productPostEntry?: ProductPostEntry): ProductPost | null {
	if (!productPostEntry) {
		return null
	}

	
	return {
		name: productPostEntry.fields.name || '',
		id: productPostEntry.fields.id,
        packing: productPostEntry.fields.packing,
		shelflife: productPostEntry.fields.shelflife,
        image: parseContentfulContentImage(productPostEntry.fields.image),
		description: productPostEntry.fields.description || null,
		specification: productPostEntry.fields.specification || null,
		maker: productPostEntry.fields.maker,

	}
}

interface FetchProductsOptions {
	preview: boolean
	locale: string
}
export async function fetchProducts({ preview, locale }: FetchProductsOptions): Promise<ProductPost[]> {
	const contentfulLocale = mapToContentfulLocale(locale);
	const contentful = contentfulClient({ preview })

	const ProductsResult = await contentful.getEntries<TypeProductSkeleton>({
		content_type: 'product',
		locale: contentfulLocale,
		include: 2,
		order: ['fields.name'],
	})

	return ProductsResult.items.map((productPostEntry) => parseContentfulProductPost(productPostEntry) as ProductPost)
}

interface FetchProductOptions {
	id: string
	preview: boolean
	locale: string
}
export async function fetchProduct({ id, preview, locale }: FetchProductOptions): Promise<ProductPost | null> {
	const contentful = contentfulClient({ preview })
	const contentfulLocale = mapToContentfulLocale(locale);

	const ProductsResult = await contentful.getEntries<TypeProductSkeleton>({
		content_type: 'product',
		'fields.id': id,
		include: 4,
		locale: contentfulLocale,
	})

	return parseContentfulProductPost(ProductsResult.items[0])
}

interface FetchMakersOptions {
	preview: boolean
}

export interface MakerPost {
	makerName: string
    logo: ContentImage | null
}

export async function fetchMakers({ preview }: FetchMakersOptions): Promise<MakerPost[]> {
	const contentful = contentfulClient({ preview })

	const MakersResult = await contentful.getEntries<TypeMakerSkeleton>({
		content_type: 'manufacture',
		include: 2,
		order: ['fields.makerName'],
	})

	return MakersResult.items.map((makerPostEntry) => parseContentfulMakerPost(makerPostEntry) as MakerPost)
}

type MakerPostEntry = Entry<TypeMakerSkeleton, undefined, string>

export function parseContentfulMakerPost(makerPostEntry?: MakerPostEntry): MakerPost | null {
	if (!makerPostEntry) {
		return null
	}
	return {
		makerName: makerPostEntry.fields.makerName || '',
        logo: parseContentfulContentImage(makerPostEntry.fields.logo),
	}
}

