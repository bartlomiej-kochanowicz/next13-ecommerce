import { ProductsGetListAllDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getProductsListAll = async ({ page = 1, take = 10 } = {}) => {
	try {
		const skip = (page - 1) * take;

		const data = await executeGraphql(ProductsGetListAllDocument, {
			skip,
			first: take,
		});

		return data;
	} catch {
		throw new Error("Error while fetching products list");
	}
};
