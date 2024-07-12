// pages/api/preview.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Check the slug parameter
  if (!req.query.slug) {
    return res.status(401).json({ message: 'Missing slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  res.redirect(`/posts/${req.query.slug}`);
};
