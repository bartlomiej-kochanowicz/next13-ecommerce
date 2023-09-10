import { type FC } from "react";
import { Image } from "./Image";

interface IProductType {
	img: {
		src: string;
		alt: string;
	};
	name: string;
	description: string;
	price: number;
}

export const ProductItem: FC<IProductType> = ({ img: { alt, src }, name, description, price }) => (
	<li className="w-min rounded-lg bg-neutral-100 p-4 drop-shadow transition hover:bg-neutral-200">
		<Image src={src} alt={alt} />

		<h3 className="mt-3 text-lg">{name}</h3>
		<data value={price} className="font-medium">
			{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price / 100)}
		</data>

		<p className="text-sm">{description}</p>
	</li>
);
