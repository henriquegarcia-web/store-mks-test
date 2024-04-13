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
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com']
  }
}

export default nextConfig
