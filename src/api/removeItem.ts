import { CartRemoveItemDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const removeItem = (itemId: string) =>
	executeGraphQl(CartRemoveItemDocument, { variables: { itemId } });
