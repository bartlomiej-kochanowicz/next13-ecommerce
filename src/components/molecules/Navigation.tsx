import { ActiveLink } from "../atoms/ActiveLink";
import { Image } from "@/components/atoms/Image";

export const Navigation = () => {
	const className = "text-neutral-500 font-semibold hover:text-neutral-700 text-xl";

	const activeClassName = "text-purple-500 hover:text-purple-500";

	return (
		<div>
			<nav className="m-auto flex items-center gap-3 border-b px-4 py-2">
				<Image src="/svgs/logo.svg" className="mr-4 h-8 w-8" alt="Company logo" />

				<ActiveLink href="/" className={className} activeClassName={activeClassName}>
					Home
				</ActiveLink>

				<ActiveLink href="/products" className={className} activeClassName={activeClassName}>
					All
				</ActiveLink>
			</nav>
		</div>
	);
};
