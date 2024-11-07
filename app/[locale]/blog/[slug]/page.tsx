import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '@/lib/contentful/blogPosts';
import arrowBack from '@/components/icons/arrow-right-black.svg';
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from 'next-international/server';
import RichText from '../../components/ui/RichText';
import { Button } from '@/components/ui/button';


interface BlogPostPageParams {
	slug: string
    locale: string;
}

interface BlogPostPageProps {
	params: BlogPostPageParams
    locale: string
}

export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
    const locales = ['en', 'vn','ja', 'zh'];
	const blogPosts = locales.map(async (locale) => {
        const posts = await fetchBlogPosts({ preview: false, locale });
        return posts.map((post) => ({ slug: post.slug, locale }));
    });
    const results = await Promise.all(blogPosts);
    return results.flat();
	
}

export async function generateMetadata({ params, locale }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled, locale })
	if (!blogPost) {
		return notFound()
	}
	return {
		title: blogPost.title,
        
	}
}

export default async function BlogPostPage({ params}: BlogPostPageProps) {
    const { slug, locale } = params;
    setStaticParamsLocale(params.locale);
    const blogT = await getScopedI18n('blog');
	const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled, locale })

	if (!blogPost) {
		return notFound()
	}

	return (
		<main className="w-full">
            <section className="min-h-screen w-full flex flex-col items-center pt-16">
                <div className='w-full max-w-7xl px-4 mb-10'>
                <h1 className='text-3xl md:text-4xl font-bold w-full mt-10 text-[--cta]'>{blogPost.title}</h1>
                <div className='w-full flex mt-4 gap-2'>
                    <Button variant="secondary" size="sm2">#tag1</Button>
                    <Button variant="secondary" size="sm2">#tag2</Button>
                </div>
                    <div className="mt-8 border-t py-8 flex flex-col items-center border-b">
                        {blogPost.coverImage && (
                            <div className='w-full overflow-hidden my-4 max-h-80 items-center flex justify-center'>
                            <img
                                src={blogPost.coverImage.src}
                                width={800}
                                height={300}
                                alt={blogPost.coverImage.alt}
                                className='object-cover'
                            />
                            </div>
                        )}
                        <Suspense>
                        <RichText content={blogPost.content} />
                        </Suspense>
                    </div>
                    <Link className='mt-10 w-fit flex items-center gap-4 border rounded-full py-2 px-10 border-gray-700' href={`/${locale}/blog`}><Image alt="" src={arrowBack} className='rotate-180 mt-1'/> {blogT('blogpage')}</Link>
                </div>
            </section>
		</main>
	)
}
