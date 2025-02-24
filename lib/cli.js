const path = require('path');

// Function to parse CLI arguments
function parseArgs(argv) {
    const args = argv.slice(2); // Slice to exclude Node.js binary and script path
    console.log('Args received:', args); // Debugging output

    if (args.length === 0) {
        console.error('Usage: krish-mon <server-file>');
        process.exit(1); // Exit if no arguments are provided
    }

    return {
        serverFile: args[0],
        configFile: 'krish-mon.json' // Default configuration file
    };
}

module.exports = { parseArgs };
