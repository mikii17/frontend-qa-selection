import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      installPlugin(on, config);
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});
