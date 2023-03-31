import { ApolloServer } from 'apollo-server-express';
import { readFile } from 'fs/promises';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
// import { db } from './db.js';
import resolvers from './src/resolvers';
import app from './src/app';
import dotenv from 'dotenv';

dotenv.config()

const main = async () => {
    const typeDefs = await readFile('./schema.graphql', 'utf-8');

    // const context = async ({ req }: any) => ({});
    const formatError = (error: GraphQLError) => ({
        message: error.message,
        errorCode: error.extensions.code,
    });
    const apolloServer = new ApolloServer({ typeDefs, resolvers, formatError });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });

    app.listen({ port: process.env.APP_PORT }, () => {
        console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
}

main();
