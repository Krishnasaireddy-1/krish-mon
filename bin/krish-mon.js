#!/usr/bin/env node

const { parseArgs } = require('../lib/cli');
const krishMon = require('../lib/krish-mon');

// Pass the entire `process.argv` to `parseArgs`
const { serverFile, configFile } = parseArgs(process.argv);
console.log(serverFile, configFile+" bin");
// Now you can call `krishMon` or any other function using these arguments
krishMon(serverFile);
