import Redis from 'ioredis'

const dotenv = require('dotenv')

dotenv.config()
const host = '127.0.0.1';

const portList = [
    process.env.REDIS_PORT_NODE1,
    process.env.REDIS_PORT_NODE2,
    process.env.REDIS_PORT_NODE3,
    process.env.REDIS_PORT_NODE4,
    process.env.REDIS_PORT_NODE5,
    process.env.REDIS_PORT_NODE6,
];

const cluster = new Redis.Cluster(
    portList.map(port => ({
        port,
        host,
    })),
    {
        scaleReads: 'slave',
    }
);

export default cluster;
