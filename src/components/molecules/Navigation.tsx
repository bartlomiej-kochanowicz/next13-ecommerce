import { ActiveLink } from "../atoms/ActiveLink";
import { getCategoriesList } from "@/api/getCategoriesList";
import { Image } from "@/components/atoms/Image";
import { paths } from "@/paths";
import { generatePath } from "@/utils/generatePath";

export const Navigation = async () => {
	const categories = await getCategoriesList();

	const className = "text-neutral-500 font-semibold hover:text-neutral-700 text-xl pb-0.5";

	const activeClassName =
		"text-purple-500 hover:text-purple-500 border-purple-500 border-b-2 !pb-0";

	return (
		<nav className="fixed left-0 right-0 top-0 z-10 m-auto flex items-center gap-3 border-b bg-white px-4 py-2">
			<Image src="/svgs/logo.svg" className="mr-4 h-8 w-8" alt="Company logo" />

			<ActiveLink href="/" className={className} activeClassName={activeClassName}>
				Home
			</ActiveLink>

			<ActiveLink href="/products" className={className} activeClassName={activeClassName}>
				All
			</ActiveLink>

			{categories.map(({ name, slug }) => (
				<ActiveLink
					key={slug}
					href={generatePath(paths.categories, {
						category: slug,
					})}
					className={className}
					activeClassName={activeClassName}
				>
					{name}
				</ActiveLink>
			))}
		</nav>
	);
};
