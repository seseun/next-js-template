import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/main",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
