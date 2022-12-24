import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import parser from '../bin/parser.js';

// вы можете получить доступ к мета-информации об этом модуле, используя объект import.meta
const __filename = fileURLToPath(import.meta.url);
// Метод path.dirname() возвращает имя каталога пути, подобно команде unix dirname.
// Конечные разделители каталогов игнорируются
const __dirname = path.dirname(__filename);
// функция которая берет путь из фикстур
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('file json', () => {
		const filename1 = getFixturePath('file1.json');
		const filename2 = getFixturePath('file2.json');
		const resultName = getFixturePath('file_result.txt');
		const result = readFileSync(resultName, 'utf8');
		expect(parser(filename1, filename2)).toBe(result);
});
//
// test('file yml', () => {
// 		const filename1 = getFixturePath('file1.yml');
// 		const filename2 = getFixturePath('file2.yml');
// 		const resultName = getFixturePath('file_result.txt');
// 		const result = readFileSync(resultName, 'utf8');
// 		expect(parser(filename1, filename2)).toBe(result);
// });