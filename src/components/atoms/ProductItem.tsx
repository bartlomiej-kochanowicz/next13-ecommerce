import { type FC } from "react";
import Link from "next/link";
import NextImage from "next/image";

interface IProductItem {
	img: {
		src?: string;
		alt: string;
	};
	title: string;
	description: string;
	price: number;
	id: string;
}

export const ProductItem: FC<IProductItem> = ({
	img: { alt, src },
	title,
	description,
	price,
	id,
}) => (
	<li className="h-auto w-min rounded-lg bg-neutral-100 p-5 drop-shadow transition hover:bg-neutral-200">
		<Link key={id} href={`/product/${id}`}>
			{src && <NextImage src={src} alt={alt} width={288} height={288} />}

			<div className="mt-3 flex justify-between align-middle">
				<h3 className="text-lg">{title}</h3>

				<data value={price} className="h-fit font-medium">
					{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
						price / 100,
					)}
				</data>
			</div>

			<p className="w-72 truncate text-sm text-neutral-600">{description}</p>
		</Link>
	</li>
);
