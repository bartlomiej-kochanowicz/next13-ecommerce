"use client";

import { type UrlObject } from "url";
import cslx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface IActiveLink<T extends string> {
	children: ReactNode;
	href: Route<T> | UrlObject;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
	disabled?: boolean;
}

export const ActiveLink = <T extends string>({
	children,
	href,
	className,
	activeClassName,
	exact,
}: IActiveLink<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href as string) &&
		  (pathname[(href as string).length] === "/" || pathname.length === (href as string).length);

	return (
		<Link href={href} className={cslx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
