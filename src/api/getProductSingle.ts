import { ProductGetSingleDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getProductSingle = async ({ id }: { id: string }) => {
	try {
		const data = await executeGraphql(ProductGetSingleDocument, {
			id,
		});

		return data;
	} catch {
		throw new Error("Error while fetching single product");
	}
};
