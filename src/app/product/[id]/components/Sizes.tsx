import { SelectButton } from "./SelectButton";
import { type ProductGetSingleQuery } from "@/gql/graphql";

interface ISizes {
	sizes: ProductGetSingleQuery["productSizeVariants"];
	selected: string;
}

export const Sizes = ({ sizes, selected }: ISizes) => {
	const selectedSize = selected || sizes[0].name;

	return (
		<div className="mt-4">
			<p>Sizes:</p>
			{sizes.map(({ id, name }) => {
				const isActive = selectedSize.toLocaleLowerCase() === name.toLocaleLowerCase();

				return <SelectButton key={id} name={name} isActive={isActive} query="size" />;
			})}
		</div>
	);
};
