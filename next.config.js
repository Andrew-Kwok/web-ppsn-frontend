/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  publicRuntimeConfig: {
    // API_URL: 'http://localhost:8000',
    API_URL: 'https://drewkwok.pythonanywhere.com',
    
    PPSN_PHONE:'+62-818-0713-7217',
    PPSN_EMAIL: 'ppsnasional@gmail.com',
    PPSN_IG: 'https://www.instagram.com/ppsn.id/',
    PPSN_LI: 'https://id.linkedin.com/company/perhimpunan-pelajar-sains-nasional',
  },
  images: {
    domains: ['localhost', 'images.unsplash.com', 'drewkwok.pythonanywhere.com']
  },
}