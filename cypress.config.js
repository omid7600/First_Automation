const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://shop:kr!3G3rMMXXI@hoeffner.frontend.stage.ecom.aws.krieger-it.net",
    //https://shop:kr!3G3rMMXXI@hoeffner.frontend.stage.ecom.aws.krieger-it.net
    chromeWebSecurity:false,
    defaultCommandTimeout : 10000,
  },
});
