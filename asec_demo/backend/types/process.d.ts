/**
 * Module dependencies.
 */

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        APP_PORT: number;
        SWAPI_HOST: string;
        DB_HOST: string;
        DB_NAME: string;
        DB_USER: string;
        DB_PASSWORD: string;
        NODE_ENV: 'development' | 'production';
        REDIS_PORT_NODE1: number;
        REDIS_PORT_NODE2: number;
        REDIS_PORT_NODE3: number;
        REDIS_PORT_NODE4: number;
        REDIS_PORT_NODE5: number;
        REDIS_PORT_NODE6: number;
        ResCacheEnable: boolean;
      }
    }
}

export {}
