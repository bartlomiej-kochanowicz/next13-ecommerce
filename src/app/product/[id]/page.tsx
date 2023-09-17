import { type FC } from "react";

interface IProductPage {
	params: {
		id: string;
	};
}

const ProductPage: FC<IProductPage> = ({ params: { id } }) => {
	return <div>Product Page - {id}</div>;
};

export default ProductPage;
