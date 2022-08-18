const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.hoeffner.de",
    chromeWebSecurity:false,
    defaultCommandTimeout : 6000,
  },
});
