import { MetadataRoute } from 'next'
import config from '@/data/config.json'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${config.portfolio}/sitemap.xml`,
  }
}
