import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getProducts = async ({ page = 1, take = 10 } = {}) => {
	try {
		const skip = (page - 1) * take;

		const data = await executeGraphql(ProductsGetListDocument, {
			skip,
			first: take,
		});

		return data;
	} catch {
		throw new Error("Error while fetching products list");
	}
};
