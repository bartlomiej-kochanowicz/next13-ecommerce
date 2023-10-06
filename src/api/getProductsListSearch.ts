import { ProductsGetListSearchDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getProductsListSearch = async ({
	query = "",
	page = 1,
	take = 10,
}: {
	query: string;
	page?: number;
	take?: number;
}) => {
	if (!query) {
		return Promise.resolve(undefined);
	}

	try {
		const skip = (page - 1) * take;

		const data = await executeGraphql(ProductsGetListSearchDocument, {
			query,
			skip,
			first: take,
		});

		return data;
	} catch {
		throw new Error("Error while fetching products list");
	}
};
