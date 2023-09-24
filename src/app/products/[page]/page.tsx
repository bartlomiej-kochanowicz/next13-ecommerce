import { Fragment } from "react";
import { notFound } from "next/navigation";
import { getProductsListAll } from "@/api/getProductsListAll";
import { ProductItem } from "@/components/atoms/ProductItem";
import { ProductList } from "@/components/atoms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";
import { paths } from "@/paths";
import { generateStaticPagination } from "@/utils/generateStaticPagination";

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
		<Fragment>
			<ProductList>
				{data.products.map(({ id, name, images, description, price }) => (
					<ProductItem
						key={id}
						id={id}
						img={{
							src: images[0]?.url || undefined,
							alt: name,
						}}
						title={name}
						description={description}
						price={price}
					/>
				))}
			</ProductList>

			<Pagination page={page} take={take} count={count} path={paths.products} />
		</Fragment>
	);
};

export default ProductsPage;
