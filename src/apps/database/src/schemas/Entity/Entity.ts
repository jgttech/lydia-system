// Register the model.
import "./Entity.model";

// Hooks
import useResolverMiddleware from "@hooks/useResolverMiddleware";

// Middleware
import applyArgsProto from "@middleware/applyArgsProto";

// Type Definitions
import extendGql from "./graphql/Entity.extend.gql";
import queryGql from "./graphql/Entity.query.gql";
import mutationGql from "./graphql/Entity.mutation.gql";
import typeGql from "./graphql/Entity.type.gql";

// Query Resolvers
import entities from "./resolvers/queries/entities";
import entityById from "./resolvers/queries/entityById";
import entityByLabel from "./resolvers/queries/entityByLabel";

// Mutation Resolvers
import entityCreateOne from "./resolvers/mutations/entityCreateOne";
import entityUpdateOne from "./resolvers/mutations/entityUpdateOne";
import entityRemoveOne from "./resolvers/mutations/entityRemoveOne";

import entityUpdateOneColor from "./resolvers/mutations/entityUpdateOneColor";
import entityRemoveOneColor from "./resolvers/mutations/entityRemoveOneColor";

import entityCreateMany from "./resolvers/mutations/entityCreateMany";
import entityUpdateMany from "./resolvers/mutations/entityUpdateMany";
import entityRemoveMany from "./resolvers/mutations/entityRemoveMany";

export const
typeDefs = [
    extendGql,
    queryGql,
    mutationGql,
    typeGql
].join("\n"),

resolvers = useResolverMiddleware({
    Query: {
        entities,
        entityById,
        entityByLabel
    },
    Mutation: {
        entityCreateOne,
        entityUpdateOne,
        entityRemoveOne,
        entityUpdateOneColor,
        entityRemoveOneColor,
        entityCreateMany,
        entityUpdateMany,
        entityRemoveMany
    }
}, [
    applyArgsProto
]);