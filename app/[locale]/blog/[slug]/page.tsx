import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '@/lib/contentful/blogPosts';
import arrowBack from '@/components/icons/arrow-right-black.svg';
import { getScopedI18n, getCurrentLocale } from "@/locales/server";
import { setStaticParamsLocale } from 'next-international/server';
import RichText from '../../components/ui/RichText';


interface BlogPostPageParams {
	slug: string
    locale: string;
}

interface BlogPostPageProps {
	params: BlogPostPageParams
}

export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
	const blogPosts = await fetchBlogPosts({ preview: false })
	return blogPosts.map((post) => ({ slug: post.slug, locale: "en" }))
}

export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })
	if (!blogPost) {
		return notFound()
	}
	return {
		title: blogPost.title,
        
	}
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    setStaticParamsLocale(params.locale);
    const blogT = await getScopedI18n('blog');
    const locale = getCurrentLocale();
	const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })


	if (!blogPost) {
		return notFound()
	}

	return (
		<main className="w-full">
            <section className="min-h-screen w-full flex flex-col items-center pt-16">
                <div className='w-full max-w-7xl px-4 mb-20'>
                <Link className='mt-10 flex items-center gap-4 w-fit' href={`/${locale}/blog`}><Image alt="" src={arrowBack} className='rotate-180 mt-1'/> {blogT('blogpage')}</Link>
                    <div className="mt-8 border-t py-8 flex flex-col items-center gap-4 border-b">
                        <h1 className='text-2xl font-semibold w-full'>{blogPost.title}</h1>
                        {blogPost.coverImage && (
                            <div className='w-full overflow-hidden max-h-80 items-center flex justify-center'>
                            <img
                                src={blogPost.coverImage.src}
                                width={800}
                                height={300}
                                alt={blogPost.coverImage.alt}
                                className='object-cover'
                            />
                            </div>
                        )}
                        
                            <RichText content={blogPost.content} />
                        
                    </div>
                </div>
            </section>
		</main>
	)
}
