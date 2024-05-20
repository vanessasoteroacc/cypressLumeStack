const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },

  env: {
    
  user_name: "Admin",
  user_password: "admin123",
  }
});
