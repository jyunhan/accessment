import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

import { ExtraFileLoader } from '../../src/utilities/extraFileLoader'

dotenv.config()

describe('Check extra file reader', () => {
    it('Whether extra files meet spec', () => {
        const extraContent = fs.readFileSync(path.resolve(ExtraFileLoader.folderPath, ExtraFileLoader.fileName + '.json')).toString();
        expect (Array.isArray(JSON.parse(extraContent))).toBeTruthy();
    })
})
