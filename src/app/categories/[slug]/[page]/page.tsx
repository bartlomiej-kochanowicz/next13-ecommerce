import { Fragment } from "react";
import { notFound } from "next/navigation";
import { ProductItem } from "@/components/atoms/ProductItem";
import { ProductList } from "@/components/atoms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";
import { paths } from "@/paths";
import { getProductsListInCategory } from "@/api/getProductsListInCategory";
import { generateStaticPagination } from "@/utils/generateStaticPagination";

type Params = { params: { slug: string; page?: string } };

const take = 10;

export const generateStaticParams = async ({ params: { slug } }: Params) => {
	const data = await getProductsListInCategory({ slug });

	const pages = generateStaticPagination(data.productsConnection.aggregate.count, take);

	return pages.map((page) => ({
		params: {
			page: [String(page)],
			slug,
		},
	}));
};

const CategoriesPage = async ({ params }: Params) => {
	const page = Number(params?.page?.[0]) || 1;

	const data = await getProductsListInCategory({ page, take, slug: params.slug });

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

export default CategoriesPage;
