import { CollectionGetListDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/lib/executeGraphQl";

export const getCollectionsList = async () => {
	try {
		const data = await executeGraphQl(CollectionGetListDocument);

		return data.collections;
	} catch {
		throw new Error("Error while fetching categories");
	}
};
