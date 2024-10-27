import { TypeBlogPostSkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './client'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>

export interface BlogPost {
	title: string
	slug: string
	content: RichTextDocument | null
	coverImage: ContentImage | null
}

export function parseContentfulBlogPost(blogPostEntry?: BlogPostEntry): BlogPost | null {
	if (!blogPostEntry) {
		return null
	}

	return {
		title: blogPostEntry.fields.title || '',
		slug: blogPostEntry.fields.slug,
		content: blogPostEntry.fields.content || null,
		coverImage: parseContentfulContentImage(blogPostEntry.fields.coverImage),
	}
}

interface FetchBlogPostsOptions {
	preview: boolean
}
export async function fetchBlogPosts({ preview }: FetchBlogPostsOptions): Promise<BlogPost[]> {
	const contentful = contentfulClient({ preview })

	const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
		content_type: 'post',
		include: 2,
		order: ['fields.title'],
	})

	return blogPostsResult.items.map((blogPostEntry) => parseContentfulBlogPost(blogPostEntry) as BlogPost)
}

interface FetchBlogPostOptions {
	slug: string
	preview: boolean
}
export async function fetchBlogPost({ slug, preview }: FetchBlogPostOptions): Promise<BlogPost | null> {
	const contentful = contentfulClient({ preview })

	const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
		content_type: 'post',
		'fields.slug': slug,
		include: 2,
	})

	return parseContentfulBlogPost(blogPostsResult.items[0])
}