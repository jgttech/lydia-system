import { merge } from "ramda";
import { gql } from "apollo-server";

const init = {
    typeDefs: [],
    resolvers: []
}

export default (schema: any = init, makeGql = false): any => {
    let
    { typeDefs, resolvers } = schema,
    Queries = {},
    Mutations = {},
    Types = {};

    if (typeDefs.length > 0)
        typeDefs = typeDefs.join("");

    if (makeGql)
        typeDefs = gql(typeDefs);

    if (resolvers.length > 0)
        for (let { Query, Mutation, ...Type } of resolvers) {
            Types = merge(Types, Type);
            Queries = merge(Queries, Query);
            Mutations = merge(Mutations, Mutation);
        }

    return {
        typeDefs,
        resolvers: {
            Query: Queries,
            Mutation: Mutations,
            ...Types
        }
    };
}