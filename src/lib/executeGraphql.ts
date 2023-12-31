import { type TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphQl = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	options?: {
		cache?: RequestCache;
		headers?: HeadersInit;
		next?: NextFetchRequestConfig | undefined;
	} & (TVariables extends { [key: string]: never }
		? { variables?: never }
		: { variables: TVariables }),
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables: options?.variables,
		}),
		cache: options?.cache,
		next: options?.next,
		headers: {
			...options?.headers,
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
