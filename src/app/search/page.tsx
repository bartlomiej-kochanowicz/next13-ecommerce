import { getProductsListSearch } from "@/api/getProductsListSearch";
import { ProductPresenter } from "@/components/organisms/ProductsPresenter";

const SearchPage = async ({
	searchParams,
}: {
	searchParams?: { [key: string]: string | undefined };
}) => {
	const data = await getProductsListSearch({ query: searchParams?.query || "" });

	return <ProductPresenter data-testid="products-list" data={data.products} />;
};

export default SearchPage;
