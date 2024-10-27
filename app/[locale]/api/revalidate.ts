import { useCurrentLocale } from '@/locales/client';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let inboundRevalToken = req.headers['x-vercel-reval-key']
  
    if (!inboundRevalToken) {
      return res
        .status(401)
        .json({ message: 'x-vercel-reval-key header not defined' })
    } else if (inboundRevalToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  
    try {
    const locale = useCurrentLocale();
      let productCode = req.body.fields.productCode['en-US']
      await res.revalidate(`${locale}/products/${productCode}`)
      await res.revalidate(`${locale}/products/`)
  
      return res.json({ revalidated: true })
    } catch (err) {
      return res.status(500).send('Error revalidating')
    }
  }
  
  export default handler