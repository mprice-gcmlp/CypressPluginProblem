import { defineConfig } from "cypress";
const { removeDirectory } = require('cypress-delete-downloads-folder');

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
    setupNodeEvents(on, config) {
      on('task', { removeDirectory })
    }
  },
});
