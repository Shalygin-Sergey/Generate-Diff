import { readFileSync } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/index.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const getFixturePath = (fileName) => path.join(__dirName, '..', '__fixtures__', fileName);

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