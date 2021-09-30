// Register the model.
import "./Lexicon.model";

// Hooks
import useResolverMiddleware from "@hooks/useResolverMiddleware";

// Middleware
import applyArgsProto from "@middleware/applyArgsProto";

// Type Definitions
import extendGql from "./graphql/Lexicon.extend.gql";
import queryGql from "./graphql/Lexicon.query.gql";
import mutationGql from "./graphql/Lexicon.mutation.gql";
import typeGql from "./graphql/Lexicon.type.gql";

// Query Resolvers
import lexiconAll from "./resolvers/queries/lexiconAll";
import lexiconById from "./resolvers/queries/lexiconById";
import lexiconByInput from "./resolvers/queries/lexiconByInput";
import lexiconCount from "./resolvers/queries/lexiconCount";
import lexiconEntityCount from "./resolvers/queries/lexiconEntityCount";
import lexiconSearchByInput from "./resolvers/queries/lexiconSearchByInput";

// Mutation Resolvers
import lexiconCreateOne from "./resolvers/mutations/lexiconCreateOne";
import lexiconUpdateOne from "./resolvers/mutations/lexiconUpdateOne";
import lexiconRemoveOne from "./resolvers/mutations/lexiconRemoveOne";

import lexiconCreateMany from "./resolvers/mutations/lexiconCreateMany";
import lexiconUpdateMany from "./resolvers/mutations/lexiconUpdateMany";
import lexiconRemoveMany from "./resolvers/mutations/lexiconRemoveMany";

import lexiconCreateOneEntity from "./resolvers/mutations/lexiconCreateOneEntity";
import lexiconUpdateOneEntity from "./resolvers/mutations/lexiconUpdateOneEntity";
import lexiconRemoveOneEntity from "./resolvers/mutations/lexiconRemoveOneEntity";

import lexiconCreateManyEntities from "./resolvers/mutations/lexiconCreateManyEntities";
import lexiconUpdateManyEntities from "./resolvers/mutations/lexiconUpdateManyEntities";
import lexiconRemoveManyEntities from "./resolvers/mutations/lexiconRemoveManyEntities";

export const
typeDefs = [
    extendGql,
    queryGql,
    mutationGql,
    typeGql
].join("\n"),

resolvers = useResolverMiddleware({
    Query: {
        lexiconAll,
        lexiconById,
        lexiconByInput,
        lexiconCount,
        lexiconEntityCount,
        lexiconSearchByInput,
    },
    Mutation: {
        lexiconCreateOne,
        lexiconUpdateOne,
        lexiconRemoveOne,

        lexiconCreateMany,
        lexiconUpdateMany,
        lexiconRemoveMany,

        lexiconCreateOneEntity,
        lexiconUpdateOneEntity,
        lexiconRemoveOneEntity,

        lexiconCreateManyEntities,
        lexiconUpdateManyEntities,
        lexiconRemoveManyEntities
    }
}, [
    applyArgsProto
]);