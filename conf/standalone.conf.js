exports.config = {
    // ...

    // Capabilities to be passed to the WebDriver instance
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                // Add any Chrome-specific options here
            }
        },
        // Add more browser configurations if needed
    ],

    // capabilities: {
    //     browserName: 'firefox',
    //     'moz:firefoxOptions': {
    //       args: ['-headless']
    //     }
    //   }

    // Test framework
    framework: 'mocha', // or 'jasmine' or 'cucumber'

    // Test files
    specs: [
        './tests/specs/test.js' // Path to your test files
    ],

    // Base URL for your application
    //baseUrl: 'http://localhost', // Change to your application's URL
    hostname: 'localhost',
    port: 4444,
    // ...

    // Services (selenium-standalone service is important for WebDriver)
    // services: [
    //     ['selenium-standalone', {
    //         logPath: 'logs', // Directory where Selenium logs will be saved
    //         installArgs: {
    //             version: '3.141.59' // Specify the Selenium version you want to use
    //         },
    //         args: {
    //             drivers: {
    //                 chrome: {
    //                     version: '94.0.4606.61' // Specify the ChromeDriver version you want to use
    //                 }
    //             }
    //         }
    //     }]
    // ],

    // ...

    // Mocha options (or Jasmine/Cucumber options based on your framework)
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 // Timeout for each test case
    },

    // ...

    // Options to be passed to WebdriverIO CLI
    //reporters: ['spec'], // Choose desired reporter(s)

    // ...

    // Hooks for setting up and tearing down the environment
    onPrepare: function (config, capabilities) {
        // Your setup code here
    },
    onComplete: function (exitCode, config, capabilities, results) {
        // Your teardown code here
    }
};
