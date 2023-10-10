import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";
import { formatMoney } from "@/utils/formatMoney";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { order: cart } = await executeGraphql(CartGetByIdDocument, {
		id: cartId,
	});

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="relative overflow-x-auto">
			{/* <h1>Order #{cart.id} summary</h1> */}
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
								<th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
									{item.product.name}
								</th>
								<td className="px-6 py-4">{item.quantity}</td>
								<td className="px-6 py-4">{formatMoney(item.product.price)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
