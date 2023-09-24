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
    "query CategoriesGetList {\n  categories {\n    slug\n    name\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionGetList {\n  collections {\n    name\n    slug\n  }\n}": types.CollectionGetListDocument,
    "query ProductGetSingle($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n}": types.ProductGetSingleDocument,
    "query ProductsGetListAll($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListAllDocument,
    "query ProductsGetListInCategory($slug: String, $first: Int, $skip: Int) {\n  products(where: {categories_every: {slug: $slug}}, first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListInCategoryDocument,
    "query ProductsGetListInCollection($slug: String, $first: Int, $skip: Int) {\n  products(where: {collections_every: {slug: $slug}}, first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection(where: {collections_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListInCollectionDocument,
    "fragment ProductInList on Product {\n  id\n  name\n  description\n  price\n  images {\n    url\n  }\n}": types.ProductInListFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    slug\n    name\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSingle($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    price\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductGetSingleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListAll($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListInCategory($slug: String, $first: Int, $skip: Int) {\n  products(where: {categories_every: {slug: $slug}}, first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListInCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListInCollection($slug: String, $first: Int, $skip: Int) {\n  products(where: {collections_every: {slug: $slug}}, first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection(where: {collections_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListInCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductInList on Product {\n  id\n  name\n  description\n  price\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductInListFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
