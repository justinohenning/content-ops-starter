/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    // Pages are rendered with next/dynamic. Parallel static generation shares
    // one loadable cache and can prerender an empty shell. Render one page at a time.
    experimental: {
        staticGenerationMaxConcurrency: 1
    }
};

module.exports = nextConfig;
