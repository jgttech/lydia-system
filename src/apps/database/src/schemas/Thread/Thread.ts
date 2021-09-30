// Register the model.
import "./Thread.model";

// Hooks
import useResolverMiddleware from "@hooks/useResolverMiddleware";

// Middleware
import applyArgsProto from "@middleware/applyArgsProto";

// Type Definitions
import extendGql from "./graphql/Thread.extend.gql";
import enumGql from "./graphql/Thread.enum.gql";
import typeGql from "./graphql/Thread.type.gql";
import mutationGql from "./graphql/Thread.mutation.gql";
import queryGql from "./graphql/Thread.query.gql";

// Query Resolvers
import threadById from "./resolvers/queries/threadById";
import threadByNumbers from "./resolvers/queries/threadByNumbers";
import threadMessageById from "./resolvers/queries/threadMessageById";
import threadMessageByNumber from "./resolvers/queries/threadMessageByNumber";
import threadMessageLatest from "./resolvers/queries/threadMessageLatest";

// Mutation Resolvers
import threadCreateOne from "./resolvers/mutations/threadCreateOne";
import threadRemoveOne from "./resolvers/mutations/threadRemoveOne";

import threadCreateOneMessage from "./resolvers/mutations/threadCreateOneMessage";
import threadUpdateOneMessage from "./resolvers/mutations/threadUpdateOneMessage";
import threadRemoveOneMessage from "./resolvers/mutations/threadRemoveOneMessage";

import threadUpdateMessageAnalysis from "./resolvers/mutations/threadUpdateMessageAnalysis";
import threadUpdateData from "./resolvers/mutations/threadUpdateData";

export const
typeDefs = [
    extendGql,
    enumGql,
    typeGql,
    mutationGql,
    queryGql
].join("\n"),
resolvers = useResolverMiddleware({
    Query: {
        threadById,
        threadByNumbers,
        threadMessageById,
        threadMessageByNumber,
        threadMessageLatest
    },
    Mutation: {
        threadCreateOne,
        threadRemoveOne,

        threadCreateOneMessage,
        threadUpdateOneMessage,
        threadRemoveOneMessage,

        threadUpdateMessageAnalysis,
        threadUpdateData,
    }
}, [
    applyArgsProto
]);