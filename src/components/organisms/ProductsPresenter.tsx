import { type FC, Fragment, type ComponentProps } from "react";
import { ProductList } from "../atoms/ProductList";
import { ProductItem } from "../atoms/ProductItem";
import { Pagination } from "../molecules/Pagination";
import { type ProductInListFragment } from "@/gql/graphql";

interface IProductPresenter {
	data: ProductInListFragment[];
	pagination?: ComponentProps<typeof Pagination>;
}

export const ProductPresenter: FC<IProductPresenter> = ({ data, pagination }) => (
	<Fragment>
		<ProductList>
			{data.map(({ id, name, images, description, price }) => (
				<ProductItem
					key={id}
					id={id}
					img={{
						src: images[0]?.url || undefined,
						alt: name,
					}}
					title={name}
					description={description}
					price={price}
				/>
			))}
		</ProductList>

		{pagination && <Pagination {...pagination} />}
	</Fragment>
);
