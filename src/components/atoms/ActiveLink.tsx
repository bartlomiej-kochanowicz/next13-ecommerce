"use client";

import cslx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, type FC, type ReactNode } from "react";

interface IActiveLink {
	children: ReactNode;
	href: ComponentProps<typeof Link>["href"];
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}

export const ActiveLink: FC<IActiveLink> = ({
	children,
	href: hrefProp,
	className,
	activeClassName,
	exact,
}) => {
	const pathname = usePathname();

	const href = hrefProp as string;

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) &&
		  (pathname[href.length] === "/" || pathname.length === href.length);

	return (
		<Link href={hrefProp} className={cslx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
