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
    PPSN_OPREC_DAFTAR_ULANG_FORM: 'https://docs.google.com/forms/d/e/1FAIpQLSco93i7IbtN5cXPjQLzcDLvX07nlAEeQCwgNobimJL7dHiowA/viewform',
    PPSN_OPREC_PROGRAM_SAINTIS_MUDA_MENGAJAR: 'https://docs.google.com/forms/d/e/1FAIpQLScpTYX-lD7xyd3PJkskgykSYu-GuYe77MN4uzA7BZh8NmgrQA/viewform',
    PPSN_PHONE:'+62-818-0713-7217',
    PPSN_EMAIL: 'ppsnasional@gmail.com',
    PPSN_IG: 'https://www.instagram.com/ppsn.id/',
    PPSN_LI: 'https://id.linkedin.com/company/perhimpunan-pelajar-sains-nasional',
  },
  images: {
    domains: ['localhost', 'images.unsplash.com', 'drewkwok.pythonanywhere.com']
  },
}