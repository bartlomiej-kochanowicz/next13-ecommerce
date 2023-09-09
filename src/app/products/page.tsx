import products from "./products";
import { ProductItem } from "@/components/ProductItem";
import { ProductList } from "@/components/ProductList";

const Products = () => (
	<main className="my-4 flex justify-center">
		<ProductList>
			{products.map(({ id, name, image_url, description, price_cents }) => (
				<ProductItem
					key={id}
					img={{
						src: image_url,
						alt: name,
					}}
					name={name}
					description={description}
					price={price_cents}
				/>
			))}
		</ProductList>
	</main>
);

export default Products;
