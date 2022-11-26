import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "gx51ba",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  video: false
});
