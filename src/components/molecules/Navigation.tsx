import { ActiveLink } from "../atoms/ActiveLink";
import { SubNavigation } from "./SubNavigation";
import { Image } from "@/components/atoms/Image";
import { getCategoriesList } from "@/api/getCategoriesList";
import { generatePath } from "@/utils/generatePath";
import { paths } from "@/paths";
import { getCollectionsList } from "@/api/getCollectionsList";

export const Navigation = async () => {
	const className = "text-neutral-500 font-semibold hover:text-neutral-700 text-xl pb-0.5";

	const activeClassName =
		"text-purple-500 hover:text-purple-500 border-purple-500 border-b-2 !pb-0";

	const categories = await getCategoriesList();
	const collections = await getCollectionsList();

	return (
		<nav className="fixed left-0 right-0 top-0 z-10 m-auto flex items-center gap-3 border-b bg-white px-4 py-2">
			<Image src="/svgs/logo.svg" className="mr-4 h-8 w-8" alt="Company logo" />

			<ul className="flex items-center gap-3">
				<li>
					<ActiveLink href="/" className={className} activeClassName={activeClassName}>
						Home
					</ActiveLink>
				</li>

				<li>
					<ActiveLink href="/products" className={className} activeClassName={activeClassName}>
						All
					</ActiveLink>
				</li>
			</ul>

			<SubNavigation name="Categories" href="/categories">
				{categories.map(({ name, slug }) => (
					<li key={slug}>
						<ActiveLink
							href={generatePath(paths.categories, {
								slug,
							})}
							className="pb-0.5 text-base font-semibold text-neutral-500 hover:text-neutral-700"
							activeClassName="text-purple-500 hover:text-purple-500"
						>
							{name}
						</ActiveLink>
					</li>
				))}
			</SubNavigation>

			<SubNavigation name="Collections" href="/collections">
				{collections.map(({ name, slug }) => (
					<li key={slug}>
						<ActiveLink
							href={generatePath(paths.collections, {
								slug,
							})}
							className="pb-0.5 text-base font-semibold text-neutral-500 hover:text-neutral-700"
							activeClassName="text-purple-500 hover:text-purple-500"
						>
							{name}
						</ActiveLink>
					</li>
				))}
			</SubNavigation>
		</nav>
	);
};
