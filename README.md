### Hexlet tests and linter status:
[![Actions Status](https://github.com/Shalygin-Sergey/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Shalygin-Sergey/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/58f2eadd0086d4280507/maintainability)](https://codeclimate.com/github/Shalygin-Sergey/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/58f2eadd0086d4280507/test_coverage)](https://codeclimate.com/github/Shalygin-Sergey/frontend-project-46/test_coverage) [![Node CI](https://github.com/Shalygin-Sergey/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/Shalygin-Sergey/frontend-project-46/actions/workflows/main.yml)

# DIFFERENCE COMPUTER

## Description
A difference calculator is an application that determines the difference between two data structures. This is a popular task for which there are many online services, such as http://www.jsondiff.com/. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

## Utility features:
- Support for different input formats: yaml, json
- Report generation in the form of plain text, stylish and json

### Requirements

- node.js

### Setup

    git clone 
    cd frontend-project-46
    make install
    sudo npm link

### Run

    gendiff <file1> <file2> --format <format>

### Demo

config check
gendiff -h
[![asciicast](https://asciinema.org/a/PmgC3fSUf1PWkdWalWNQ9Golt.svg)](https://asciinema.org/a/PmgC3fSUf1PWkdWalWNQ9Golt)

An example of running the difference calculator for files with nested structures in JSON (output in formats stylish, plain and json)

Plain
[![asciicast](https://asciinema.org/a/TZW6hb0q2SJWx3kiPnctTdyw5.svg)](https://asciinema.org/a/TZW6hb0q2SJWx3kiPnctTdyw5)
Json
[![asciicast](https://asciinema.org/a/dBgQQVlld1gg1vlczEFnApvIY.svg)](https://asciinema.org/a/dBgQQVlld1gg1vlczEFnApvIY)
Stylish
[![asciicast](https://asciinema.org/a/EMHzJsosicnxHrYNtfKsKFdri.svg)](https://asciinema.org/a/EMHzJsosicnxHrYNtfKsKFdri)

An example of running the difference calculator for files with nested structures in YML (output in formats stylish, plain and json)
[![asciicast](https://asciinema.org/a/52bZHgdVhRgISrNzb4qlGhpig.svg)](https://asciinema.org/a/52bZHgdVhRgISrNzb4qlGhpig)
