const { spawn } = require('child_process');
const chokidar = require('chokidar');

// Function to monitor files and restart the server
function monitorFiles(serverFile, config) {
    let serverProcess = null;

    // Function to start/restart the server
    function startServer() {
        if (serverProcess) {
            serverProcess.kill(); // Kill existing process
        }

        console.log(`🔄 Restarting server: ${serverFile}...`);
        serverProcess = spawn('node', [serverFile], { stdio: 'inherit' });

        serverProcess.on('exit', (code) => {
            console.log(`❌ Server exited with code ${code}`);
        });
    }

    // Watch files for changes
    const watcher = chokidar.watch(config.watch, { ignored: config.ignore });
    watcher.on('change', (file) => {
        console.log(`📝 File changed: ${file}`);
        startServer();
    });

    // Handle restartable command via stdin
    if (process.stdin.setRawMode) {
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
        let buffer = '';

        process.stdin.on('data', (data) => {
            buffer += data;
            if (buffer.trim() === config.restartable) {
                console.log('🔄 Restart command received');
                startServer();
                buffer = '';
            } else if (data.charCodeAt(0) === 3) { // Ctrl+C
                process.exit();
            }
        });
    }

    // Signal handling for restart
    process.on(config.signal, () => {
        console.log(`🔄 Signal ${config.signal} received, restarting...`);
        startServer();
    });

    // Start the server initially
    startServer();
}

module.exports = { monitorFiles };
