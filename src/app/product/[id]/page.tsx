import { type FC } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { getProductSingle } from "@/api/getProductSingle";

interface IProductPage {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: IProductPage): Promise<Metadata> {
	const { id } = params;

	const data = await getProductSingle({ id });

	if (!data) {
		return notFound();
	}

	const { name, description, images } = data;

	return {
		title: name,
		description: description,
		openGraph: {
			images: images[0].url ? [images[0].url] : [],
		},
	};
}

const ProductPage: FC<IProductPage> = async ({ params: { id } }) => {
	const data = await getProductSingle({ id });

	if (!data) {
		notFound();
	}

	const { images, name, description, price } = data;

	const image = images[0].url;

	return (
		<article className="mx-3 justify-center align-middle md:flex">
			{image && <NextImage src={image} alt={name} width={400} height={400} className="mx-auto" />}

			<section className="my-4 md:mx-8">
				<div className="mb-4 flex justify-between align-middle">
					<h1 className="mr-16 text-2xl font-semibold">{name}</h1>

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
