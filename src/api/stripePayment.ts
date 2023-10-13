import Stripe from "stripe";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getCartFromCookies } from "./getCartFromCookies";

export const stripePayment = async () => {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const cart = await getCartFromCookies();

	if (!cart) {
		return;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product?.name ?? "",
					description: item.product?.description ?? "",
					images: item.product?.images.map((i) => i.url),
				},
				unit_amount: item.product?.price ?? 0,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});
	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
};
