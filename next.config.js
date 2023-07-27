/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  publicRuntimeConfig: {
    // API_URL: 'http://localhost:8000',
    API_URL: 'https://drewkwok.pythonanywhere.com',

    PPSN_OPREC_DECISION_URL: 'https://drive.google.com/drive/folders/1HAdIcD4MRzalGgKxwgRxj1vsmSOQ9cnT?usp=sharing',
    PPSN_OPREC_KETENTUAN_TEKNIS: 'https://drive.google.com/drive/folders/12Wg92bsYWyb_FKnyQ6l8omLDqm1nP4k4',
    PPSN_PHONE:'+62-818-0713-7217',
    PPSN_EMAIL: 'ppsnasional@gmail.com',
    PPSN_IG: 'https://www.instagram.com/ppsn.id/',
    PPSN_LI: 'https://id.linkedin.com/company/perhimpunan-pelajar-sains-nasional',
  },
  images: {
    domains: ['localhost', 'images.unsplash.com', 'drewkwok.pythonanywhere.com']
  },
}