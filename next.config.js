/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
    config.experiments = { asyncWebAssembly: true }
    return config
  },
}

module.exports = nextConfig
