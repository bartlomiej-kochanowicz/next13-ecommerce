import { CategoriesGetListDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const getCategoriesList = async () => {
	try {
		const data = await executeGraphQl(CategoriesGetListDocument);

		return data.categories;
	} catch {
		throw new Error("Error while fetching categories");
	}
};
