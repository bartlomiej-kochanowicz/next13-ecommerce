import { ProductGetSingleDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const getProductSingle = async ({ id }: { id: string }) => {
	try {
		const data = await executeGraphQl(ProductGetSingleDocument, {
			variables: {
				id,
			},
		});

		return data;
	} catch {
		throw new Error("Error while fetching single product");
	}
};
