import { ShoppingBasket } from "lucide-react";
import { cookies } from "next/headers";
import { getCardById } from "@/api/getCardById";

export const CartButton = async () => {
	const cartId = cookies().get("cartId")?.value;
	const cart = cartId ? await getCardById({ cartId }) : null;

	const count = cart?.order?.orderItems.length || 0;

	return (
		<button className="flex items-center text-neutral-500 hover:text-neutral-700">
			<ShoppingBasket />

			<span className="ml-1">{count}</span>
		</button>
	);
};
