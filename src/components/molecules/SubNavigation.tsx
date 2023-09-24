"use client";

import { type UrlObject } from "url";
import { type ReactElement } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useHover, useLayer } from "react-laag";
import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";

interface ISubNavigation<T extends string> {
	children: ReactElement[];
	name: string;
	href: Route<T> | UrlObject;
}

export const SubNavigation = <T extends string>({ children, name, href }: ISubNavigation<T>) => {
	const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 100 });

	const { triggerProps, layerProps, renderLayer } = useLayer({
		isOpen: isOver,
		placement: "bottom-start",
		triggerOffset: 4,
	});

	return (
		<li {...hoverProps} {...triggerProps} className="flex items-center gap-3">
			<ActiveLink
				href={href}
				className="z-30 flex items-center bg-white pb-0.5 text-xl font-semibold text-neutral-500 hover:text-neutral-700"
				activeClassName="text-purple-500 hover:text-purple-500 border-purple-500 border-b-2 !pb-0"
			>
				{name}

				{isOver ? <ChevronUp /> : <ChevronDown />}
			</ActiveLink>

			{renderLayer(
				<AnimatePresence>
					{isOver && (
						<motion.ul
							className="z-20 flex flex-col gap-2 rounded-md border bg-white px-4 py-2 shadow-lg"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.1 }}
							{...layerProps}
						>
							{children}
						</motion.ul>
					)}
				</AnimatePresence>,
			)}
		</li>
	);
};
