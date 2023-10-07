import { SelectButton } from "./SelectButton";
import { type ProductGetSingleQuery } from "@/gql/graphql";

interface IColors {
	colors: ProductGetSingleQuery["productColorVariants"];
	selected: string;
}

export const Colors = ({ colors, selected }: IColors) => {
	const selectedColor = selected || colors[0].name;

	return (
		<div className="mt-4">
			<p>Colors:</p>
			{colors.map(({ id, name }) => {
				const isActive = selectedColor.toLocaleLowerCase() === name.toLocaleLowerCase();

				return <SelectButton key={id} name={name} isActive={isActive} query="color" />;
			})}
		</div>
	);
};
