
const handler = async (_: any, res: any) => {
    res.clearPreviewData()
    res.writeHead(307, { Location: '/' })
    res.end()
  }
  
  export default handler