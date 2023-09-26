import NextImage from "next/image";
import Link from "next/link";
import { getCollectionsList } from "@/api/getCollectionsList";
import { paths } from "@/paths";
import { generatePath } from "@/utils/generatePath";

export const Collections = async () => {
	const collections = await getCollectionsList();

	return (
		<div className="relative mx-auto flex w-full flex-col gap-6 bg-neutral-100 px-8 lg:flex-row lg:px-20">
			{collections.map(({ image: { url }, name, slug }) => (
				<div key={slug} className="group w-full">
					<Link
						href={generatePath(paths.collections, {
							slug,
						})}
						className="w-full"
					>
						<NextImage
							className="h-72 w-full rounded-md object-cover object-center transition group-hover:scale-105 group-hover:opacity-75"
							width={320}
							height={320}
							src={url}
							alt={name}
						/>

						<span className="mt-2 block font-semibold text-neutral-700">{name}</span>
					</Link>
				</div>
			))}
		</div>
	);
};
