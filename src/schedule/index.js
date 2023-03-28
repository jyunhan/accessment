const CronJob = require('cron').CronJob;
const { resolveQuesetion } = require('../services/question');

const questionResolveTimeInterval = 2; // represent: sec.

const job = new CronJob(
    `*/${questionResolveTimeInterval} * * * * *`,
    async () => {
        await resolveQuesetion();
    },
    null,
    true,
    'Asia/Taipei'
);


