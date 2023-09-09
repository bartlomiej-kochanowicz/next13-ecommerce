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
	<li className="rouned-lg w-min bg-neutral-200 p-4 transition hover:bg-neutral-300">
		<Image src={src} alt={alt} />

		<h3 className="text-lg">{name}</h3>

		<p className="text-sm">{description}</p>
	</li>
);
