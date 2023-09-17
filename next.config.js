/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// typedRoutes: true,
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
};

module.exports = nextConfig;
