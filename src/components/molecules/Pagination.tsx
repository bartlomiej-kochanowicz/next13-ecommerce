import { type ComponentProps, type FC } from "react";
import type Link from "next/link";
import clsx from "clsx";
import { ActiveLink } from "../atoms/ActiveLink";
import { generateOrderedArray } from "@/utils/generateOrderedArray";

interface IPagination {
	page: number;
	hrefBuilder: (page: number) => string;
}

export const Pagination: FC<IPagination> = ({ page, hrefBuilder }) => {
	const pages = generateOrderedArray(page);

	const showLeftArrow = page > 1;

	return (
		<nav aria-label="Page navigation example" className="m-4 mx-auto w-fit">
			<ul className="flex h-10 items-center -space-x-px text-base">
				{showLeftArrow && (
					<li>
						<ActiveLink
							href={hrefBuilder(page - 1) as ComponentProps<typeof Link>["href"]}
							className="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="sr-only">Previous</span>
							<svg
								className="h-3 w-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1 1 5l4 4"
								/>
							</svg>
						</ActiveLink>
					</li>
				)}
				{pages.map((page) => (
					<li key={page}>
						<ActiveLink
							href={hrefBuilder(page) as ComponentProps<typeof Link>["href"]}
							className={clsx(
								"flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700",
								!showLeftArrow && page === 1 && "rounded-l-lg",
							)}
							activeClassName="bg-gray-100 text-gray-700"
						>
							{page}
						</ActiveLink>
					</li>
				))}
				<li>
					<ActiveLink
						href={hrefBuilder(page + 1) as ComponentProps<typeof Link>["href"]}
						className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
					>
						<span className="sr-only">Next</span>
						<svg
							className="h-3 w-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 9 4-4-4-4"
							/>
						</svg>
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
