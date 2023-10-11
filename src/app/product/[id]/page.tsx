import { Fragment, type FC } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { revalidateTag } from "next/cache";
import { Sizes } from "./components/Sizes";
import { Colors } from "./components/Colors";
import AddToCartButton from "./components/AddToCartButton";
import { getProductSingle } from "@/api/getProductSingle";
import { shuffleArray } from "@/utils/shuffleArray";
import { ProductPresenter } from "@/components/organisms/ProductsPresenter";
import { getOrCreateCart } from "@/api/getOrCreateCart";
import { addProductToCart } from "@/api/addProductToCart";
import { formatMoney } from "@/utils/formatMoney";

interface IProductPage {
	params: {
		id: string;
	};
	searchParams: {
		size: string;
		color: string;
	};
}

export async function generateMetadata({ params }: IProductPage): Promise<Metadata> {
	const { id } = params;

	const data = await getProductSingle({ id });

	if (!data.product) {
		return notFound();
	}

	const { name, description, images } = data.product;

	return {
		title: name,
		description: description,
		openGraph: {
			images: images[0].url ? [images[0].url] : [],
		},
	};
}

const ProductPage: FC<IProductPage> = async ({ params: { id }, searchParams }) => {
	const data = await getProductSingle({ id });

	if (!data.product) {
		notFound();
	}

	const { images, name, description, price, collections, categories } = data.product;
	const { productColorVariants } = data;
	const { productSizeVariants } = data;

	const renderColors = productColorVariants.length > 0;
	const renderSizes = productSizeVariants.length > 0;

	const image = images[0].url;

	const relatedProducts = shuffleArray([
		...(collections[0] ? collections[0].products : []),
		...(categories[0] ? categories[0].products : []),
		...data.products,
	]).slice(0, 4);

	const addToCartAction = async () => {
		"use server";

		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, id);

		revalidateTag("cart");
	};

	return (
		<Fragment>
			<article className="mx-3 justify-center align-middle md:flex">
				{image && <NextImage src={image} alt={name} width={400} height={400} className="mx-auto" />}

				<section className="my-4 md:mx-8">
					<div className="mb-4 flex justify-between align-middle">
						<h1 className="mr-16 text-2xl font-semibold">{name}</h1>

						<data value={price} className="h-fit text-2xl font-medium">
							{formatMoney(price)}
						</data>
					</div>

					<p>{description}</p>

					{renderColors && <Colors colors={productColorVariants} selected={searchParams.color} />}

					{renderSizes && <Sizes sizes={productSizeVariants} selected={searchParams.size} />}

					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
				</section>
			</article>

			<h2 className="mx-3 mb-4 mt-16 text-2xl">Related products:</h2>

			<ProductPresenter data={relatedProducts} data-testid="related-products" />
		</Fragment>
	);
};

export default ProductPage;
