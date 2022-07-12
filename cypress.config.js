const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        dynamicFiledownload: (downloadspath) => {
          return fs.readdirSync(downloadspath);
        },
      });
    },
  },
});
