#!/usr/bin/env node
import { program } from 'commander';
import parser from "../src/index.js";

program
	.description('Compares two configuration files and shows a difference.')
	.version('0.1')
	.option('-f, --format <type>', 'output format', 'stylish')
	.argument('<filePath1>')
	.argument('<filePath2>')
	.action((filePath1, filePath2, options) => {
		console.log(parser(filePath1, filePath2, options.format));
	});

program.parse();
