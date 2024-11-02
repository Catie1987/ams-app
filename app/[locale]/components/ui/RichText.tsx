import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import ContentfulImage from './ContentfullImage';
import { useCurrentLocale } from '@/locales/client';

const options = {
  renderMark: {
    [MARKS.CODE]: (text:any) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      )
    }
  },
  renderNode: {
    [BLOCKS.HEADING_3]: (node:any, children:any) => <h3 className='text-xl font-semibold py-2 w-full'>{children}</h3>,
    [BLOCKS.HEADING_2]: (node:any, children:any) => <h2 className='text-2xl font-semibold py-2 w-full'>{children}</h2>,
    [BLOCKS.HEADING_1]: (node:any, children:any) => <h1 className='text-3xl font-bold py-2 w-full'>{children}</h1>,
    [BLOCKS.UL_LIST]: (node:any, children:any) => <ul className='pl-8 list-disc'>{children}</ul>,
    [BLOCKS.OL_LIST]: (node:any, children:any) => <ol className='pl-8 list-decimal'>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node:any, children:any) => <li className=''>{children}</li>,

    [BLOCKS.TABLE]: (node:any, children:any) => (
      <table className="w-full">{children}</table>
    ),
    [BLOCKS.TABLE_ROW]: (node:any, children:any) => (
      <tr className="even:bg-gray-100">{children}</tr>
    ),
    [BLOCKS.TABLE_CELL]: (node:any, children:any) => (
      <td className="px-2">{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node:any, children:any) => (
      <th className="text-start px-2">{children}</th>
    ),

    [BLOCKS.PARAGRAPH]: (node:any, children:any) => {
      if (
        node.content.find((item:any) =>
          item.marks?.find((mark:any) => mark.type === 'code')
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        )
      }

      return (
        <>
        <hr className='block bg-transparent h-1 border-0'/>
        <p className='text-gray-800'>{children}</p>
        <hr className='block bg-transparent h-2 border-0'/>
        </>
      )
    },

    [INLINES.ENTRY_HYPERLINK]: (node:any) => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        const locale = useCurrentLocale();
        return (
          <Link href={`${locale}/blog/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        )
      }
    },

    [INLINES.HYPERLINK]: (node:any) => {
      const text = node.content.find((item:any) => item.nodeType === 'text')?.value
      return (
        <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      )
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node:any) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        )
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node:any) => {
      return (
        <ContentfulImage
          src={node.data.target.fields.file.url}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.title}
          className="my-6"
        />
      )
    }
  }
}

const RichText = ({ content }: { content: any }) => {
  // Check if content is available
  if (!content) {
    return null;
  }

  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
