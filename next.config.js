/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
}

module.exports = {
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'BUILD_ID'
    },
}

module.exports = nextConfig
