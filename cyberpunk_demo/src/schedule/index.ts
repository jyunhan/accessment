import { CronJob } from 'cron';
import questionService from '../services/question';

const job = new CronJob(
    '*/4 * * * * *',
    () => { // no need async here, it execute in child_process
        const idleTime = Math.floor(Math.random() * 2);

        // Randomly 3 - 5 sec.,
        setTimeout(async () => {
            await questionService.resolve();
        }, idleTime * 1000)
    },
    null,
    true,
    'Asia/Taipei'
);
