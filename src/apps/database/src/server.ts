import "colors";
import "./mongoose";

// Environment configuration from ".env" file.
import dotenv from "dotenv";
dotenv.config();

import { log } from "console";
import { ApolloServer } from "apollo-server";
import graphql from "./graphql";

(async () => {
    try {
        const
        { PORT } = process.env,
        app = new ApolloServer(graphql),
        { url } = await app.listen({ port: PORT });

        log(url.green.bold);
    } catch(e) {
        throw e;
    }
})()