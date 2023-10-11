import { ProductsGetListAllDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const getProductsListAll = async ({
	page = 1,
	take = 10,
}: {
	page?: number;
	take?: number;
} = {}) => {
	try {
		const skip = (page - 1) * take;

		const data = await executeGraphQl(ProductsGetListAllDocument, {
			variables: {
				skip,
				first: take,
			},
		});

		return data;
	} catch {
		throw new Error("Error while fetching products list");
	}
};
