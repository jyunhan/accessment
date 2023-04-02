import dotenv from 'dotenv'
dotenv.config()

describe('test', () => {
    test.each([
        'APP_PORT',
        'DB_HOST',
        'DB_NAME',
        'DB_USER',
        'DB_PASSWORD',
        'SWAPI_HOST',
        'REDIS_PORT_NODE1',
        'REDIS_PORT_NODE2',
        'REDIS_PORT_NODE3',
        'REDIS_PORT_NODE4',
        'REDIS_PORT_NODE5',
        'REDIS_PORT_NODE6',
        'ResCacheEnable',
    ])('process env check has %i', (key) => {
        const envKeyList = Object.keys(process.env)
        expect(envKeyList.includes(key)).toBeTruthy();
        expect(process.env[key]).not.toStrictEqual('');
    })
})
