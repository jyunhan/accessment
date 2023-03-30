/**
 * Module dependencies.
 */

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GITHUB_AUTH_TOKEN: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
        REDIS_PORT_NODE1: number;
        REDIS_PORT_NODE2: number;
        REDIS_PORT_NODE3: number;
        REDIS_PORT_NODE4: number;
        REDIS_PORT_NODE5: number;
        REDIS_PORT_NODE6: number;
      }
    }
}

export {}
