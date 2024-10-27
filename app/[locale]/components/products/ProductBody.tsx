import RichText from '../RichText'

const ProductBody = ({ post }: { post: any }) => {
  const { content } = post.fields

  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  )
}

export default ProductBody