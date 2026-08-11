import { MetadataRoute } from 'next'
import config from '@/data/config.json'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.portfolio,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}
