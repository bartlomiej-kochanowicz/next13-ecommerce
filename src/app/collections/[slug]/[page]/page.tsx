import { notFound } from "next/navigation";
import { paths } from "@/paths";
import { getProductsListInCategory } from "@/api/getProductsListInCategory";
import { generateStaticPagination } from "@/utils/generateStaticPagination";
import { ProductPresenter } from "@/components/organisms/ProductsPresenter";
import { getProductsListInCollection } from "@/api/getProductsListInCollection";

type Params = { params: { slug?: string; page?: string } };

const take = 10;

export const generateStaticParams = async ({ params: { slug } }: Params) => {
	if (!slug) {
		return [];
	}

	const data = await getProductsListInCategory({ slug });

	const pages = generateStaticPagination(data.productsConnection.aggregate.count, take);

	return pages.map((page) => ({
		params: {
			page: [String(page)],
			slug,
		},
	}));
};

const CollectionsPage = async ({ params }: Params) => {
	const page = Number(params?.page?.[0]) || 1;

	const { slug } = params;

	if (!slug) {
		notFound();
	}

	const data = await getProductsListInCollection({ page, take, slug });

	if (!data) {
		notFound();
	}

	const count = data.productsConnection.aggregate.count;

	return (
		<ProductPresenter
			data={data.products}
			pagination={{
				count,
				take,
				page,
				path: paths.collections,
			}}
		/>
	);
};

export default CollectionsPage;
