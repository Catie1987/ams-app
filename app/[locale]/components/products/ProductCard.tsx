import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product } : {product:any}) => {
  const { name, id,packing, image ,maker} = product.fields;
  const noimageurl = "https://res.cloudinary.com/dsrswsitk/image/upload/v1730165281/ams/ssag8srtsnjxgbsotbfr.jpg"

  return (
    <li className='rounded-lg overflow-hidden shadow-lg bg-white group border'>
      <Link href={`/product/${id}`} aria-label={name}>
        <div className='h-60 flex flex-col relative overflow-hidden'>
            <div className='w-full bg-[--cta] text-white py-1 px-3 z-20 min-h-14 line-clamp-2 text-ellipsis'>{name}</div>
              <div className='w-full overflow-hidden h-4/5 flex items-center justify-center'>
              {image?.fields?.file.url ? (
                <Image src={'https:'+image.fields.file.url} width={300} height={200} alt={`Cover Image for ${name}`}
                className='object-cover w-auto h-full group-hover:scale-110 transition-transform duration-300' />
              ) :(<img src={noimageurl} alt='' className='object-cover w-full h-full'/>)}
                </div>
             
              <div className='h-1/5 w-full flex items-center justify-center py-2 overflow-hidden'> 
              {maker?.fields?.logo?.fields.file.url ? (
                <img src={'https:'+(maker?.fields?.logo?.fields.file.url || '')} alt={maker?.fields?.makerName || 'N/A'}
                className='object-cover h-full w-auto'/>) : (
                <div className='w-full text-center font-medium text-gray-800'> Manufacture: {maker?.fields?.makerName || 'N/A'}</div>)}
              </div>

          <div className='absolute flex bg-blue-700/70 left-0 h-full w-full z-10 translate-y-full group-hover:translate-y-0 duration-300 items-end'>
            <ul className='relative w-full h-[calc(100%-40px)] mb-0 flex flex-col justify-center list-disc ml-8 pr-2'>
              <li className='text-white'>Manufacture: {maker?.fields?.makerName || 'N/A'}</li>
              <li className='text-white'>Package size: {packing || ''}</li>
            </ul>
          </div>  
        </div>
      </Link>
    </li>
  )
}

export default ProductCard