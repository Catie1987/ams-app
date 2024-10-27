import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const previewClient = contentful.createClient({
  host: 'preview.contentful.com',
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
});


export default function contentfulClient({ preview = false }) {
	if (preview) {
		return previewClient
	}

	return client
}