
const { parseArgs } = require('./cli');
const { loadConfig } = require('./config');
const { monitorFiles } = require('./monitor');

function krishMon(args) {
  // Parse CLI arguments
    //console.log(args+" lib");
  const serverFile=args;
  const configFile='krish-mon.json';
    console.log(serverFile, configFile+" lib");
  // Load configuration
  const config = loadConfig(configFile);

  // Start monitoring the files
  monitorFiles(serverFile, config);
}

module.exports = krishMon;

