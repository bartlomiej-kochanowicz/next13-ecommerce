import { type ReactNode, type FC } from "react";

interface IProductList {
	children: ReactNode;
}

export const ProductList: FC<IProductList> = ({ children }) => (
	<ul
		data-testid="products-list"
		className="mx-auto grid w-fit grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
	>
		{children}
	</ul>
);
