/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetSingle($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n}": types.ProductGetSingleDocument,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSingle($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductGetSingleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
