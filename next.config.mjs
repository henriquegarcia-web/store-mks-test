/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     missingSuspenseWithCSRBailout: false,
  //   },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

export default nextConfig
