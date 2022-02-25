import { GraphQLClient } from "graphql-request";

export { SubgraphReader } from "./reader";
export { TransactionStatus } from "./runtime/graphqlsdk";
export { ReadSubgraphConfig } from "./types";

import { getSdk } from "./runtime/graphqlsdk";

export const getRuntimeSdk = (url: string) => getSdk(new GraphQLClient(url));