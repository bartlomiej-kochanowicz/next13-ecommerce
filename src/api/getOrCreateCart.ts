import { cookies } from "next/headers";
import { getCardById } from "./getCardById";
import { executeGraphQl } from "@/lib/executeGraphQl";
import { CartCreateDocument } from "@/gql/graphql";

export const getOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await getCardById({ cartId });
		if (cart) {
			return cart;
		}
	}

	const { createOrder: newCart } = await executeGraphQl(CartCreateDocument);
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
};
