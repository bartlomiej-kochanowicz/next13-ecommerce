/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
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
			{
				source: "/categories",
				destination: "/categories/t-shirts/1",
				permanent: true,
			},
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: true,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: true,
			},
			{
				source: "/categories/accessories",
				destination: "/categories/accessories/1",
				permanent: true,
			},
			{
				source: "/categories/socks",
				destination: "/categories/socks/1",
				permanent: true,
			},
			{
				source: "/collections/summer-vibes",
				destination: "/categories/summer-vibes/1",
				permanent: true,
			},
			{
				source: "/collections/new-arrivals",
				destination: "/categories/new-arrivals/1",
				permanent: true,
			},
			{
				source: "/collections/elegant-extras",
				destination: "/categories/elegant-extras/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
