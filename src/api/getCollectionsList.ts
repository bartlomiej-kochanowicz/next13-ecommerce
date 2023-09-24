import { CollectionGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getCollectionsList = async () => {
	try {
		const data = await executeGraphql(CollectionGetListDocument);

		return data.collections;
	} catch {
		throw new Error("Error while fetching categories");
	}
};
