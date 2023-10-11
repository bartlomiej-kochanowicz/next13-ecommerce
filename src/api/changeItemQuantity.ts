"use server";

import { CartChangeItemQuantityDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const changeItemQuantity = (itemId: string, quantity: number) =>
	executeGraphQl(CartChangeItemQuantityDocument, {
		variables: {
			itemId,
			quantity,
		},
	});
