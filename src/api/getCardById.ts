import { CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const getCardById = ({ cartId }: { cartId: string }) =>
	executeGraphQl(CartGetByIdDocument, {
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
	});
