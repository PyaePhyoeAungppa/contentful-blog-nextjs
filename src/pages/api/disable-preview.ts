// pages/api/disable-preview.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
}
