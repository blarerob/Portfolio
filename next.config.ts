/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
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
    org: "sites-for-sore-eyes",
    project: "portfolio-nextjs",
});

module.exports = withSentryConfig(nextConfig);