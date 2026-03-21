export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',     
      disallow: [
        '/admin',      
        '/api',        
        '/dashboard',  
        '/private',    
      ],
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}