"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

interface ISelectButton {
	name: string;
	isActive: boolean;
	query: string;
}

export const SelectButton = ({ name, isActive, query }: ISelectButton) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = () => {
		router.push(`${pathname}?${query}=${name}`);
	};

	return (
		<button
			onClick={handleChange}
			className={clsx("rounded border border-neutral-600 px-6 py-2", {
				"bg-neutral-600": isActive,
				"text-white": isActive,
			})}
		>
			{name}
		</button>
	);
};
