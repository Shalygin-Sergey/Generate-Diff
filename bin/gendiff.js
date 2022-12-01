#!/usr/bin/env node
import { program } from 'commander';
import parser from "./parser.js";

program
		.description('Compares two configuration files and shows a difference.')
		.version('0.0.1')
		.option('-f, --format <type>', 'output format')
		.argument('<filepath1>')
		.argument('<filepath2>')
		.action((firstConfig, secondConfig) => {
				console.log(parser(firstConfig, secondConfig));
		});

program.parse();
