export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/dashboard', '/private'],
      },
    ],
    sitemap: 'https://kontazio.com/sitemap.xml', // આ લાઈન બરાબર છે
  }
}