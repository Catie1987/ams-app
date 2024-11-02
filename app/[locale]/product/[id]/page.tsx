import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrowBack from '@/components/icons/arrow-right-black.svg';
import { Button } from '@/components/ui/button';
import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { fetchProduct, fetchProducts } from '@/lib/contentful/productPosts';
import { getScopedI18n, getCurrentLocale } from "@/locales/server";
import { setStaticParamsLocale } from 'next-international/server';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RichText from '../../components/ui/RichText';

interface ProductPageParams {
  id: string;
  locale: string;
}

interface ProductPageProps {
  params: ProductPageParams;
}

export async function generateStaticParams(): Promise<ProductPageParams[]> {
  const productPosts = await fetchProducts({ preview: false });
  return productPosts.map((product) => ({ id: product.id, locale: "en"  }));
}

export async function generateMetadata({ params }: ProductPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const productPost = await fetchProduct({ id: params.id, preview: draftMode().isEnabled });
  if (!productPost) {
    return notFound();
  }
  return { title: productPost.name };
}

export default async function ProductContent({ params }: ProductPageProps) {
  setStaticParamsLocale(params.locale);
  const t = await getScopedI18n('product');
  const productPost = await fetchProduct({ id: params.id, preview: draftMode().isEnabled });
  
  if (!productPost) {
    return notFound();
  }
  const locale=getCurrentLocale();
  const noImageUrl = "https://res.cloudinary.com/dsrswsitk/image/upload/v1730165281/ams/ssag8srtsnjxgbsotbfr.jpg";

  return (
    <main className='my-10 w-full flex justify-between gap-4 max-md:flex-col'>
      <section className='basis-4/5 max-md:basis-0 flex flex-col'>
        <div className='w-full grid grid-cols-2 gap-4 max-lg:grid-cols-1 items-center bg-white'>
          <div>
            {productPost?.image? (
              <Image src={'https:' + productPost.image.src} width={800} height={300} alt='' />
            ) : (
              <img src={noImageUrl} alt='' className='object-cover w-full h-full' />
            )}
          </div>
          <div className='p-4 text-gray-900 w-full'>
            <h1 className='text-[--cta] text-2xl md:text-4xl mb-10'>{productPost.name}</h1>
            <p className='font-bold text-lg md:text-xl my-1'>{t('maker')} :
              <span className='font-normal'> {productPost?.maker?.fields?.makerName || ''} </span>
            </p>
            <p className='font-bold text-lg md:text-xl my-1'>{t('package')} :
              <span className='font-normal'> {productPost?.packing || ''}</span>
            </p>
            <p className='font-bold text-lg md:text-xl my-1'>{t('shelflife')} :
              <span className='font-normal'> {productPost?.shelflife || ''}</span>
            </p>
            <div className='w-full flex justify-center mt-10'>
              <Button size="xl">{t('inquiries')}</Button>
            </div>
          </div>
        </div>
        <div className='w-full bg-white'>
          <Tabs defaultValue="des" className="w-full">
            <TabsList className='border-t-0 sm:border-t'>
              <TabsTrigger value="des">{t('description')}</TabsTrigger>
              <TabsTrigger value="spec">{t('spec')}</TabsTrigger>
              <TabsTrigger value="info">TDS/SDS</TabsTrigger>
            </TabsList>
            <div className='p-4 w-full min-h-64'>
              <TabsContent value="des" className=''>
                {productPost?.description ? <RichText content={productPost.description} /> : 'N/A'}
              </TabsContent>
              <TabsContent value="spec" className=''>
                {productPost?.specification ? <RichText content={productPost.specification} /> : 'N/A'}
              </TabsContent>
              <TabsContent value="info" className=''>Download TDS/SDS</TabsContent>
            </div>
          </Tabs>
        </div>
        <div className='w-full h-14 flex items-center mt-10'>
        <Link className='flex items-center gap-4 border rounded-full py-2 px-10 border-gray-700' href={`/${locale}/product`}><Image alt="" src={arrowBack} className='rotate-180 mt-1'/> Go Back </Link>
        </div>
      </section>
      <div className='border bg-gray-200/50 basis-1/5 max-md:basis-0 min-w-64'>
        Similar Section
      </div>
    </main>
  );
}
