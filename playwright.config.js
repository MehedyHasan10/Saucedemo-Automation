import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  use: {
    headless: false, // show browser
    viewport: null,  // null means use the full available screen size
    launchOptions: {
      args: ["--start-maximized"], // start browser maximized
    },
  },
  reporter: [
    ["list"],
    ["allure-playwright", { resultsDir: "allure-results", detail: false, }],
  ],
});
