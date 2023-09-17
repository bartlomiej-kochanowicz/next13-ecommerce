import { Fragment } from "react";
import { getProducts } from "@/api/getProducts";
import { ProductItem } from "@/components/atoms/ProductItem";
import { ProductList } from "@/components/atoms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";

const ProductsPage = async ({ params }: { params: { page?: string } }) => {
	const page = Number(params?.page?.[0]) || 1;

	const products = await getProducts({ page });

	const hrefBuilder = (paginationPage: number) => {
		if (page === 1 && paginationPage === 1) return "/products";

		return `/products/${paginationPage}`;
	};

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

			<Pagination page={page} hrefBuilder={hrefBuilder} />
		</Fragment>
	);
};

export default ProductsPage;
