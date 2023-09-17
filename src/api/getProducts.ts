import type { Product } from "@/types/product";

export const getProducts = async ({ page = 1, take = 10 } = {}): Promise<Product[]> => {
	const offset = (page - 1) * take;

	try {
		const response = await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
		);

		const products = (await response.json()) as Product[];

		return products;
	} catch {
		throw new Error("Cannot fetch products");
	}
};
