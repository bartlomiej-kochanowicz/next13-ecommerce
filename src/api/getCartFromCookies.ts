import { cookies } from "next/headers";
import { getCardById } from "./getCardById";

export const getCartFromCookies = async () => {
	"use server";

	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return undefined;
	}

	const { order } = await getCardById({ cartId });

	return order;
};
