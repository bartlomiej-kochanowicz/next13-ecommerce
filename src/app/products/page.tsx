import Link from "next/link";
import { getProducts } from "@/api/getProducts";
import { ProductItem } from "@/components/atoms/ProductItem";
import { ProductList } from "@/components/atoms/ProductList";

const ProductsPage = async () => {
	const products = await getProducts();

	return (
		<ProductList>
			{products.map(({ id, title, image, description, price }) => (
				<Link key={id} href={`/product/${id}`} className="w-min">
					<ProductItem
						img={{
							src: image,
							alt: title,
						}}
						title={title}
						description={description}
						price={price}
					/>
				</Link>
			))}
		</ProductList>
	);
};

export default ProductsPage;
