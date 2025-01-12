const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    baseUrl: 'https://www.ebay.com',
    chromeWebSecurity: true,
    defaultCommandTimeout: 10000,
    execTimeout: 60000,
    pageLoadTimeout: 20000,
    requestTimeout: 40000,
    responseTimeout: 40000,
    taskTimeout: 60000,
    viewportWidth: 3000,
    viewportHeight: 1800,
    experimentalMemoryManagement:true,
    numTestsKeptInMemory:1
    
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js',
  },
});
