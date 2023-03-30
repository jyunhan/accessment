import { Database } from 'fakebase';
import path from 'path';

// To copy json file into dist, need to import json file
import peopleJson from '../data/people.json';

const folderPath = path.resolve(__dirname, '../data');
const db = new Database(folderPath);

export const People = db.table('people');
