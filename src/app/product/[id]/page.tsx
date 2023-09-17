import { type FC } from "react";
import { getProduct } from "@/api/getProduct";
import { Image } from "@/components/atoms/Image";

interface IProductPage {
	params: {
		id: string;
	};
}

const ProductPage: FC<IProductPage> = async ({ params: { id } }) => {
	const { image, title } = await getProduct({ id });

	return (
		<article className="flex">
			<Image src={image} alt={title} className="h-96 w-96" />

			<section>
				<h1>{title}</h1>
			</section>
		</article>
	);
};

export default ProductPage;
