import { ProductsGetListInCollectionDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getProductsListInCollection = async ({
	page = 1,
	take = 10,
	slug,
}: {
	page?: number;
	take?: number;
	slug: string;
}) => {
	try {
		const skip = (page - 1) * take;

		const data = await executeGraphql(ProductsGetListInCollectionDocument, {
			skip,
			first: take,
			slug,
		});

		return data;
	} catch {
		throw new Error("Error while fetching products list");
	}
};
