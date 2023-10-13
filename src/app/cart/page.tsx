import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { RemoveButton } from "./RemoveButton";
import { formatMoney } from "@/utils/formatMoney";
import { ChangeQuantity } from "@/app/cart/ChangeQuantity";
import { getCardById } from "@/api/getCardById";
import { stripePayment } from "@/api/stripePayment";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { order: cart } = await getCardById({ cartId });

	if (!cart) {
		redirect("/");
	}

	return (
		<>
			<h1>Order #{cart.id} summary</h1>

			<div className="relative overflow-x-auto">
				<table className="w-full text-left text-sm text-gray-500">
					<thead className="bg-gray-50 text-xs uppercase text-gray-700">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product name
							</th>
							<th scope="col" className="px-6 py-3">
								Quantity
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
						</tr>
					</thead>
					<tbody>
						{cart.orderItems.map((item) => {
							if (!item.product) {
								return null;
							}
							return (
								<tr key={item.product.id} className="border-b bg-white ">
									<th
										scope="row"
										className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
									>
										{item.product.name}
									</th>
									<td className="px-6 py-4">
										<ChangeQuantity itemId={item.product.id} quantity={item.quantity} />
									</td>
									<td className="px-6 py-4">{formatMoney(item.product.price)}</td>
									<td className="px-6 py-4">
										<RemoveButton productId={item.product.id} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				<form action={stripePayment} className="ml-auto">
					<button
						type="submit"
						className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
					>
						Pay
					</button>
				</form>
			</div>
		</>
	);
}
