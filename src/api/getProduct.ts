import type { Product } from "@/types/product";

export const getProduct = async ({ id }: { id: string }): Promise<Product> => {
	try {
		const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

		const products = (await response.json()) as Product;

		return products;
	} catch {
		throw new Error("Cannot fetch product");
	}
};
