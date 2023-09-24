import { ProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getProducts = async ({ page = 1, take = 10 } = {}) => {
	try {
		const skip = (page - 1) * take;

		const data = await executeGraphql(ProductsDocument, {
			skip,
			first: take,
		});

		return data;
	} catch {
		console.log("error");
	}
};
