import type { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");

	const products = (await response.json()) as Product[];

	return products;
};
