import { getProducts } from "@/api/getProducts";
import { ProductItem } from "@/components/atoms/ProductItem";
import { ProductList } from "@/components/atoms/ProductList";

const ProductsPage = async () => {
	const products = await getProducts();

	return (
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
	);
};

export default ProductsPage;
