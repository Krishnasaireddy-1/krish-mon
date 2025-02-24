const fs = require('fs');

// Default configuration
const defaultConfig = {
    watch: ['.'],
    ignore: ['node_modules', '.git'],
    restartable: 'rs',
    signal: 'SIGUSR2'
};

// Function to load configuration from a file
function loadConfig(configFile) {
    let config = { ...defaultConfig };

    if (fs.existsSync(configFile)) {
        try {
            const configData = fs.readFileSync(configFile, 'utf-8');
            config = { ...config, ...JSON.parse(configData) };
        } catch (err) {
            console.error(`Error loading configuration from ${configFile}:`, err);
        }
    }

    return config;
}

module.exports = { loadConfig };
