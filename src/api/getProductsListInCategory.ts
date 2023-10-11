import { ProductsGetListInCategoryDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const getProductsListInCategory = async ({
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

		const data = await executeGraphQl(ProductsGetListInCategoryDocument, {
			variables: {
				skip,
				first: take,
				slug,
			},
		});

		return data;
	} catch {
		throw new Error("Error while fetching products list");
	}
};
