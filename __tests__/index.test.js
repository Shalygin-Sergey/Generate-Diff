import { readFileSync } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('check json file', () => {
	const fileName1 = getFixturePath('file1.json');
	const fileName2 = getFixturePath('file2.json');
	const resultName = getFixturePath('file_result.txt');
	const result = readFileSync(resultName, 'utf8');
	expect(parser(fileName1, fileName2)).toBe(result);
});

test('check yml file', () => {
	const fileName1 = getFixturePath('file1.yml');
	const fileName2 = getFixturePath('file2.yml');
	const resultName = getFixturePath('file_result.txt');
	const result = readFileSync(resultName, 'utf8');
	expect(parser(fileName1, fileName2)).toBe(result);
});