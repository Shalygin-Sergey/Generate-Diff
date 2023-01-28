import path from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import renderDiff from './formatters/index.js';
import buildTree from './buildTree.js';

const getData = (filepath) => parse(readFileSync(filepath, 'utf-8'), getTypeFile(filepath));
const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);
const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);


export default (pathFile1, pathFile2, formatName = 'stylish') => {
  const dataFile1 = getData(buildFullPath(pathFile1));
  const dataFile2 = getData(buildFullPath(pathFile2));
  const diff = buildTree(dataFile1, dataFile2);
  return renderDiff(diff, formatName);
};
