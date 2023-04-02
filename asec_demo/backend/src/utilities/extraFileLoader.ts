import { Database } from 'fakebase';
import path from 'path';

// To copy json file into dist, need to import json file
import extraCharacterJson from '../data/extra_character.json';

class ExtraFileLoaderClass {
    readonly folderPath = path.resolve(__dirname, '../data');

    constructor(public fileName: string) {}

    get reader() {
        const db = new Database(folderPath);
        return db.table('extra_character');
    }
}

const folderPath = path.resolve(__dirname, '../data');
const db = new Database(folderPath);

export const ExtraFileLoader = new ExtraFileLoaderClass('extra_character');
