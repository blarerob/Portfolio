/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
    outputPath: 'export',
    typescript: {
        // Set to true to allow production builds even if there are type errors
        ignoreBuildErrors: true,
    },
    distDir: "dist", // Set the output directory to 'dist'
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "example.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "*.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
});

module.exports = withSentryConfig(nextConfig);