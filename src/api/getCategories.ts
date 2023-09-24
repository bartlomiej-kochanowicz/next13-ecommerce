import { CategoriesGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getCategories = async () => {
	try {
		const data = await executeGraphql(CategoriesGetListDocument);

		return data.categories;
	} catch {
		throw new Error("Error while fetching categories");
	}
};
