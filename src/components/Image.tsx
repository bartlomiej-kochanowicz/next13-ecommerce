import NextImage from "next/image";
import { type FC } from "react";

interface IImage {
	src: string;
	alt: string;
}

export const Image: FC<IImage> = (props) => (
	<div className="relative h-80 w-80">
		<NextImage {...props} layout="fill" objectFit="contain" />
	</div>
);
