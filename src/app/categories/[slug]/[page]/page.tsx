import { Fragment } from "react";
import { notFound } from "next/navigation";
import { ProductItem } from "@/components/atoms/ProductItem";
import { ProductList } from "@/components/atoms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";
import { paths } from "@/paths";
import { getProductsListInCategory } from "@/api/getProductsListInCategory";

export const generateStaticParams = () => {
	const pages = Array.from({ length: 3 }, (_, i) => i + 1);

	return pages.map((page) => ({
		params: {
			page: [String(page)],
		},
	}));
};

const CategoriesPage = async ({ params }: { params: { slug: string; page?: string } }) => {
	const page = Number(params?.page?.[0]) || 1;
	const take = 10;

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
