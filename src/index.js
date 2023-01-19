import {readFileSync} from 'fs';
import path from 'path';
import buildDiff from './builddiff.js';
import getFormatting from './formatters/index.js';
import parse from './parsers.js';

const getPath = (fileName) => path.resolve(process.cwd(), fileName);

const getFileFormat = (fileName) => path.extname(fileName).slice(1);

const readFile = (filePath) => readFileSync(filePath, 'utf8');

const parser = (filePath1, filePath2, formatName = 'stylish') => {
	const path1 = getPath(filePath1);
	const data1 = parse(readFile(path1), getFileFormat(filePath1));

	const path2 = getPath(filePath2);
	const data2 = parse(readFile(path2), getFileFormat(filePath2));

	const diff = buildDiff(data1, data2);
	return getFormatting(diff, formatName);
};
export default parser;