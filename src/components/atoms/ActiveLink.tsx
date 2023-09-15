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
	href,
	className,
	activeClassName,
	exact,
}) => {
	const pathname = usePathname();

	const isActive = exact ? pathname === href : pathname.startsWith(href as string);

	return (
		<Link href={href} className={cslx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
