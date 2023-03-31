// import { CronJob } from 'cron';
// import axios from 'axios';
// import dotenv from 'dotenv'
// import fs from 'fs';
// import path, { resolve } from 'path';

// dotenv.config()

// const myFunc = async () => {
//     const peopleFetch = await axios({
//         method: 'GET',
//         url: `${process.env.SWAPI_HOST}people/?page=1`
//     })
//     const { count, results: page1Result } = peopleFetch.data;

//     const promiseArray = []
//     for (let idx = 2; idx <= Math.ceil(count / page1Result.length); idx++) {
//         promiseArray.push(
//             axios({
//                 method: 'GET',
//                 url: `${process.env.SWAPI_HOST}people/?page=${idx}`
//             }).then(xhr => xhr?.data?.results)
//         )
//     }

//     const result = await Promise.all(promiseArray);
//     result.push(page1Result);
//     const printString = result.flat().map((cell: any) => {
//         cell.id = cell.url.match(/https:\/\/swapi.dev\/api\/people\/(\d+)/)[1];
//         return cell;
//     })

//     const exportFilePath = resolve(__dirname, '../data/people.json');
//     fs.writeFileSync(exportFilePath, JSON.stringify(printString, null, 4));
// }

// (async function IIFE() {
//     await myFunc();
// }());
