import axios, { AxiosRequestConfig } from 'axios';
import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
// import morgan from 'morgan';

import redis from '../facilities/redis';

export const demoRequest = async (payload: AxiosRequestConfig) => {
    const resCacheEnable = process.env.ResCacheEnable;

    // TODO: Can adopt morgan & winston here...
    try {
        const { url } = payload;

        if (resCacheEnable) {
            const cacheData = await redis.get(url!);
            if (cacheData) {
                return JSON.parse(cacheData)
            }
        }

        const response = await axios(payload)

        if (resCacheEnable) {
            const expiredSeconds = 86400; // per day
            await redis.set(url!, JSON.stringify(response.data), 'EX', expiredSeconds);
        }

        return response.data
    } catch (err) {
        console.error(err);
        throw new GraphQLError(ApolloServerErrorCode.BAD_REQUEST, {
            extensions: {
              code: 'Customize error code'
            }
        })
    }
}


