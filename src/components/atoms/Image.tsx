import clsx from "clsx";
import NextImage from "next/image";
import { type FC } from "react";

interface IImage {
	src: string;
	alt: string;
	className?: string;
}

export const Image: FC<IImage> = ({ className, ...rest }) => (
	<div className={clsx("relative", className)}>
		<NextImage {...rest} layout="fill" objectFit="contain" />
	</div>
);
