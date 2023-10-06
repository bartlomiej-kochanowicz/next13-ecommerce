import { getProductsListSearch } from "@/api/getProductsListSearch";
import { ProductPresenter } from "@/components/organisms/ProductsPresenter";

const SearchPage = async ({
	searchParams,
}: {
	searchParams?: { [key: string]: string | undefined };
}) => {
	const data = await getProductsListSearch({ query: searchParams?.query || "" });

	return (
		<main className="mb-20 mt-24 sm:mt-12">
			<div className="relative mx-auto w-full bg-neutral-100 px-16 py-8">
				Found {data?.productsConnection.aggregate.count || 0} items for phrase &quot;
				{searchParams?.query}&quot;
			</div>

			{data && (
				<div className="mx-auto mt-6 max-w-5xl">
					<ProductPresenter data-testid="products-list" data={data.products} />
				</div>
			)}
		</main>
	);
};

export default SearchPage;
