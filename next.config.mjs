/** @type {import('next').NextConfig} */

import path from 'path'

const nextConfig = {
  //   experimental: {
  //     missingSuspenseWithCSRBailout: false,
  //   },
  sassOptions: {
    includePaths: [path.join(import.meta.url, 'styles')]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        pathname: '**'
      }
    ]
  }
}

export default nextConfig
