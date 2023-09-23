import { Fragment } from "react";
import { getProducts } from "@/api/getProducts";
import { ProductItem } from "@/components/atoms/ProductItem";
import { ProductList } from "@/components/atoms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";

export const generateStaticParams = () => {
	const pages = Array.from({ length: 10 }, (_, i) => i + 1);

	return pages.map((page) => ({
		params: {
			page: [String(page)],
		},
	}));
};

const ProductsPage = async ({ params }: { params: { page?: string } }) => {
	const page = Number(params?.page?.[0]) || 1;

	const products = await getProducts({ page });

	return (
		<Fragment>
			<ProductList>
				{products.map(({ id, title, image, description, price }) => (
					<ProductItem
						key={id}
						id={id}
						img={{
							src: image,
							alt: title,
						}}
						title={title}
						description={description}
						price={price}
					/>
				))}
			</ProductList>

			<Pagination page={page} path="/products/[page]" />
		</Fragment>
	);
};

export default ProductsPage;
