import { type FC } from "react";
import { getProduct } from "@/api/getProduct";
import { Image } from "@/components/atoms/Image";

interface IProductPage {
	params: {
		id: string;
	};
}

const ProductPage: FC<IProductPage> = async ({ params: { id } }) => {
	const { image, title, description } = await getProduct({ id });

	return (
		<article className="justify-center align-middle sm:flex">
			<Image src={image} alt={title} className="mx-auto h-80 w-80" />

			<section className="sm:ml-3">
				<h1 className="text-2xl font-semibold">{title}</h1>

				<p>{description}</p>
			</section>
		</article>
	);
};

export default ProductPage;
