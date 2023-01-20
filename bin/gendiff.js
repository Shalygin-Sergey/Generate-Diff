#!/usr/bin/env node
import { program } from 'commander';
import parser from "../src/index.js";

program
	.description('Compares two configuration files and shows a difference.')
	.version('0.1')
	.option('-f, --format <type>', 'output format', 'stylish')
	.argument('<filepath1>')
	.argument('<filepath2>')
	.action((filepath1, filepath2, options) => {
		console.log(parser(filepath1, filepath2, options.format));
	});

program.parse();
