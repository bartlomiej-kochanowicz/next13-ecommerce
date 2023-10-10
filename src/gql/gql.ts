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
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      quantity\n      product {\n        ...ProductInList\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "query CategoriesGetList {\n  categories {\n    slug\n    name\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionGetList {\n  collections {\n    name\n    slug\n    image {\n      url\n    }\n  }\n}": types.CollectionGetListDocument,
    "query ProductGetSingle($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductInList\n    categories(first: 4) {\n      products {\n        ...ProductInList\n      }\n    }\n    collections(first: 4) {\n      products {\n        ...ProductInList\n      }\n    }\n  }\n  products(first: 4) {\n    ...ProductInList\n  }\n  productColorVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n  productSizeVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n}": types.ProductGetSingleDocument,
    "query ProductsGetListAll($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListAllDocument,
    "query ProductsGetListInCategory($slug: String, $first: Int, $skip: Int) {\n  products(where: {categories_every: {slug: $slug}}, first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListInCategoryDocument,
    "query ProductsGetListInCollection($slug: String, $first: Int, $skip: Int) {\n  products(where: {collections_every: {slug: $slug}}, first: $first, skip: $skip) {\n    ...ProductInList\n  }\n  productsConnection(where: {collections_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListInCollectionDocument,
    "query ProductsGetListSearch($query: String!) {\n  products(where: {name_contains: $query}) {\n    ...ProductInList\n  }\n  productsConnection(where: {name_contains: $query}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListSearchDocument,
    "fragment ProductInList on Product {\n  id\n  name\n  description\n  price\n  images {\n    url\n  }\n}": types.ProductInListFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      quantity\n      product {\n        ...ProductInList\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    slug\n    name\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    name\n    slug\n    image {\n      url\n    }\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSingle($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductInList\n    categories(first: 4) {\n      products {\n        ...ProductInList\n      }\n    }\n    collections(first: 4) {\n      products {\n        ...ProductInList\n      }\n    }\n  }\n  products(first: 4) {\n    ...ProductInList\n  }\n  productColorVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n  productSizeVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductGetSingleDocument;
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
export function graphql(source: "query ProductsGetListSearch($query: String!) {\n  products(where: {name_contains: $query}) {\n    ...ProductInList\n  }\n  productsConnection(where: {name_contains: $query}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListSearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductInList on Product {\n  id\n  name\n  description\n  price\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductInListFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
