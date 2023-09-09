import { type ReactNode, type FC } from "react";

interface IProductList {
	children: ReactNode;
}

export const ProductList: FC<IProductList> = ({ children }) => (
	<ul
		data-testid="products-list"
		className="grid grid-cols-4 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
	>
		{children}
	</ul>
);