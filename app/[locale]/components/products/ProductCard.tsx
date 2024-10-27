
import Link from 'next/link';
import ContentfulImage from '../ui/ContentfullImage';

const ProductCard = ({ product }: { product: any }) => {
  const { productCode, productName, productImage, description} = product.fields;

  return (
    <li className='rounded-md overflow-hidden shadow-md'>
      <Link href={`/products/${productCode}`} aria-label={productName}>
        <div className='mb-2'>
          <ContentfulImage
            alt={`Cover Image for ${productName}`}
            src={productImage.fields.file.url}
            width={productImage.fields.file.details.image.width}
            height={productImage.fields.file.details.image.height}
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl mb-1 leading-snug'>{productName}</h3>
          <div className='text-sm mb-4 text-gray-400'>
            
          </div>
          <p className='text-base mb-4'>{description}</p>
          
        </div>
      </Link>
    </li>
  )
}

export default ProductCard