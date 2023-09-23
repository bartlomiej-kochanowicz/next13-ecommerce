/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "/images/**",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
