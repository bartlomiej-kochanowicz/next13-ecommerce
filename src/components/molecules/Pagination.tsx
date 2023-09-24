"use client";

import { type FC } from "react";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";
import { generateOrderedArray } from "@/utils/generateOrderedArray";
import { generatePath } from "@/utils/generatePath";

interface IPagination {
	/** Current page */
	page: number;
	/** Path template */
	path: string;
	/** Number of all items */
	count: number;
	/** Number of items per page */
	take: number;
}

export const Pagination: FC<IPagination> = ({ page, path, count, take }) => {
	const maxPage = Math.ceil(count / take);
	const pages = generateOrderedArray(page, maxPage);

	const params = useParams();

	const showLeftArrow = page > 1;
	const showRightArrow = page < pages.length;

	if (pages.length === 1) {
		return null;
	}

	return (
		<nav aria-label="pagination" className="m-4 mx-auto w-fit">
			<ul className="flex h-10 items-center -space-x-px text-base">
				{showLeftArrow && (
					<li>
						<ActiveLink
							href={generatePath(path, {
								...params,
								page: String(page - 1),
							})}
							className="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="sr-only">Previous</span>

							<ChevronLeft />
						</ActiveLink>
					</li>
				)}
				{pages.map((page) => (
					<li key={page}>
						<ActiveLink
							href={generatePath(path, {
								...params,
								page: String(page),
							})}
							className={clsx(
								"flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100",
								!showLeftArrow && page === 1 && "rounded-l-lg",
								!showRightArrow && page === maxPage && "rounded-r-lg",
							)}
							activeClassName="!bg-gray-100 text-gray-700"
						>
							{page}
						</ActiveLink>
					</li>
				))}
				{showRightArrow && (
					<li>
						<ActiveLink
							href={generatePath(path, {
								...params,
								page: String(page + 1),
							})}
							className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="sr-only">Next</span>

							<ChevronRight />
						</ActiveLink>
					</li>
				)}
			</ul>
		</nav>
	);
};
