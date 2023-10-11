import { CartAddItemDocument, ProductGetSingleDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const addProductToCart = async (cartId: string, productId: string) => {
	const { product } = await executeGraphQl(ProductGetSingleDocument, {
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphQl(CartAddItemDocument, {
		variables: {
			cartId,
			productId,
			total: product.price,
		},
	});
};
