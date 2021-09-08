module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // if the source, query, and cookie are matched,
      // this redirect will be applied
      {
        source: '/auth',
        has: [
          {
            type: 'cookie',
            key: 'token'
          },
        ],
        permanent: true,
        destination: '/',
      }
    ]
  },
}

