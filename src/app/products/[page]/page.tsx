import { notFound } from "next/navigation";
import { getProductsListAll } from "@/api/getProductsListAll";
import { paths } from "@/paths";
import { generateStaticPagination } from "@/utils/generateStaticPagination";
import { ProductPresenter } from "@/components/organisms/ProductsPresenter";

const take = 10;

export const generateStaticParams = async () => {
	const data = await getProductsListAll();

	const pages = generateStaticPagination(data.productsConnection.aggregate.count, take);

	return pages.map((page) => ({
		params: {
			page: [String(page)],
		},
	}));
};

const ProductsPage = async ({ params }: { params: { page?: string } }) => {
	const page = Number(params?.page?.[0]) || 1;

	const data = await getProductsListAll({ page, take });

	if (!data) {
		notFound();
	}

	const count = data.productsConnection.aggregate.count;

	return (
		<ProductPresenter
			data-testid="products-list"
			data={data.products}
			pagination={{
				count,
				take,
				page,
				path: paths.products,
			}}
		/>
	);
};

export default ProductsPage;
