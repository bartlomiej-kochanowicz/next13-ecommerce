import { CartAddItemDocument, ProductGetSingleDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const addProductToCart = async (cartId: string, productId: string) => {
	const { product } = await executeGraphql(ProductGetSingleDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql(CartAddItemDocument, {
		cartId,
		productId,
		total: product.price,
	});
};
