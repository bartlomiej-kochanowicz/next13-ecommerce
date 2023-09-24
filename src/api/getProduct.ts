import { notFound } from "next/navigation";
import { ProductGetSingleDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getProduct = async ({ id }: { id: string }) => {
	try {
		const data = await executeGraphql(ProductGetSingleDocument, {
			id,
		});

		return data.product;
	} catch {
		return notFound();
	}
};
