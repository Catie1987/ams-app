import React from 'react';
import BlogBanner from './blog-banner';
import { client } from '@/lib/contentful/client'
import PostCard from '../components/posts/PostCard';
import BreadCrumb from '../components/breadcrumb';



export default async function BlogPage() {
    const response = await client.getEntries({ content_type: 'post' });
    const posts = response.items;

    return (
      <div className="w-full">
        <BlogBanner />
        <section className="min-h-screen w-full flex flex-col items-center">
          <div className='w-full max-w-7xl px-4'>
          <BreadCrumb/>
            <ul className='my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
              {posts.map((post: any, idx) => (
                <PostCard key={idx} post={post}/>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  
  };
