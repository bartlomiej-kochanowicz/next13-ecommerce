"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const AddToCartButton = () => {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			className="mt-8 w-full rounded-md border bg-purple-500 px-8 py-3 text-white shadow-sm hover:shadow-md disabled:cursor-wait disabled:bg-purple-200"
		>
			Add to cart
		</button>
	);
};

export default AddToCartButton;
