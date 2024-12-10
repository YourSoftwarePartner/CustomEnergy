const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    darkMode: 'class',
    konsta: {
        colors: {
            // "primary" is the main app color, if not specified will be default to '#007aff'
            primary: '#93DC5C',
            secondary: '#93DC5C'
        }
    }
    });