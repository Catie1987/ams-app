import Link from 'next/link';
import Image from 'next/image';
import arrowRight from '@/components/icons/arrowr-right-cta.svg';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PostCard = ({ post, locale }: { post: any, locale: string }) => {
  const { title, slug, coverImage, content } = post.fields;
  

  return (
    <li className='rounded-lg overflow-hidden shadow-lg bg-white group'>
      <Link href={`/blog/${slug}`} aria-label={title}>
        <div className='h-80 flex flex-col max-sm:grid max-sm:grid-cols-3 max-sm:h-44'>
            <div className='w-full overflow-hidden h-3/5 max-sm:h-full max-sm:row-span-2'>
            <Image src={'https:'+coverImage.fields.file.url} width={500} height={300} alt={`Cover Image for ${title}`}
            className='object-cover w-full h-full border group-hover:scale-110 transition-transform duration-300' />
            </div>
            <div className='mt-4 px-4 text-gray-800 tracking-wide max-sm:col-span-2'>
                <h2 className='sm:truncate w-full border-b border-gray-200 font-semibold text-xl pb-2 max-sm:line-clamp-2 
                max-sm:text-ellipsis max-sm:text-lg'>
                    {title}
                </h2>
                
                <div className='text-gray-700 line-clamp-2 text-ellipsis mt-2 max-sm:text-sm'>
                  {documentToReactComponents(content)}
                </div>
            </div>
            <div className='-bottom-20 h-0 group-hover:h-10 group-hover:bottom-0 transition-all duration-300 relative flex gap-4 px-5 items-center 
            max-sm:bottom-0 max-sm:col-span-2 max-sm:h-10 max-sm:mt-auto'>
                <div className='text-[--cta] pb-1'>Read more</div>
                <Image alt='' src={arrowRight}/>
            </div>
        </div>
      </Link>
    </li>
  )
}

export default PostCard