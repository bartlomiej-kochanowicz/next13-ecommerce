import { clsx } from "clsx";
import { Search } from "lucide-react";
import { type FC } from "react";

interface IInput {
	className?: string;
}

export const Input: FC<IInput> = ({ className }) => (
	<div className={clsx("relative", className)}>
		<label htmlFor="default-search" className="hidden">
			Search
		</label>
		<Search className="absolute left-3 top-[0.6rem] h-5 w-5 text-neutral-400" />
		<input
			type="search"
			id="default-search"
			className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 outline-offset-1 outline-purple-400"
			placeholder="Search Mockups, Logos..."
			required
		/>
	</div>
);
