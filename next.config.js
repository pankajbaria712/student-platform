
/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: '/pdfs/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://gtustudenthub.vercel.app/pdfs/:path*>; rel="canonical"',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
