import { type FC } from "react";
import { type Metadata } from "next";
import { getProduct } from "@/api/getProduct";
import { Image } from "@/components/atoms/Image";

interface IProductPage {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: IProductPage): Promise<Metadata> {
	const { id } = params;

	const { title, description, image } = await getProduct({ id });

	return {
		title: title,
		description: description,
		openGraph: {
			images: [image],
		},
	};
}

const ProductPage: FC<IProductPage> = async ({ params: { id } }) => {
	const { image, title, description, price } = await getProduct({ id });

	return (
		<article className="mx-3 justify-center align-middle sm:flex">
			<Image src={image} alt={title} className="mx-auto h-80 w-80" />

			<section className="my-4 sm:mx-8">
				<div className="mb-4 flex justify-between align-middle">
					<h1 className="text-2xl font-semibold">{title}</h1>

					<data value={price} className="h-fit text-2xl font-medium">
						{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
							price / 100,
						)}
					</data>
				</div>

				<p>{description}</p>
			</section>
		</article>
	);
};

export default ProductPage;
