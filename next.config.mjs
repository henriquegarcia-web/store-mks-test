/** @type {import('next').NextConfig} */

import path from 'path'

const nextConfig = {
  //   experimental: {
  //     missingSuspenseWithCSRBailout: false,
  //   },
  sassOptions: {
    includePaths: [path.join(import.meta.url, 'styles')]
  }
}

export default nextConfig
