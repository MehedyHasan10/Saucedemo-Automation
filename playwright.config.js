import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  use: {
    headless: false, 
    viewport: null,  
    launchOptions: {
      args: ["--start-maximized"], 
    },
  },
  reporter: [
    ["list"],
    ["allure-playwright", { resultsDir: "allure-results", detail: false, }],
  ],
});
