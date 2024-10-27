
import ContentfulImage from "../ui/ContentfullImage";


const PostHeader = ({ product }: { product: any }) => {
  const { productCode, coverImage } = product.fields

  return (
    <>
      <h2>{productCode}</h2>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${productCode}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
       
      </div>
    </>
  )
}

export default PostHeader