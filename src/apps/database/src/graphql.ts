import dotenv from "dotenv";
import { buildFederatedSchema } from "@apollo/federation";
import gqlSchemaBuilder from "@commonUtils/gqlSchemaBuilder";
import { typeDefs as Lexicon, resolvers as LexiconResolvers } from "./schemas/Lexicon/Lexicon";
import { typeDefs as Entity, resolvers as EntityResolvers } from "./schemas/Entity/Entity";
import { typeDefs as Thread, resolvers as ThreadResolvers } from "./schemas/Thread/Thread";

dotenv.config();
const { PLAYGROUND } = process.env;

export default {
    playground: !(PLAYGROUND == "true") ? false : {
        settings: {
            "request.credentials": "include"
        }
    },
    schema: buildFederatedSchema([
        gqlSchemaBuilder({
            typeDefs: [
                Entity,
                Lexicon,
                Thread
            ],
            resolvers: [
                EntityResolvers,
                LexiconResolvers,
                ThreadResolvers
            ]
        }, true)
    ])
}