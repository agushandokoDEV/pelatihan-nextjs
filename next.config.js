module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_HOST_URL: process.env.API_HOST_URL,
    ROOT_USER_CREDENTIAL: process.env.ROOT_USER_CREDENTIAL,
    TOKEN: process.env.TOKEN
  }
}
