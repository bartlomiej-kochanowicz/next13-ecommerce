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

export const ProductItem: FC<IProductType> = ({ img: { alt, src }, name, description }) => (
	<li className="w-min rounded-lg bg-neutral-100 p-4 transition hover:bg-neutral-200">
		<Image src={src} alt={alt} />

		<h3 className="text-lg">{name}</h3>

		<p className="text-sm">{description}</p>
	</li>
);
