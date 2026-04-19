import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // הכנס כאן את כתובת הדומיין האמיתית שלך ללא סלאש בסוף
  const baseUrl = 'https://www.djomermizrahi.com' 

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1, // העמוד הראשי מקבל את העדיפות הגבוהה ביותר
    },
    // תוכל להוסיף כאן עמודים סטטיים נוספים שיש באתר
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}