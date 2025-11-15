# SauceDemo Automation

This project automates a user scenario on the [SauceDemo](https://www.saucedemo.com) website using **Playwright**. It supports **Allure reporting** and captures **screenshots** for test results.  

## Scenario Covered
- Log in with valid credentials  
- Add one product to the cart  
- Verify the product name in the cart  
- Log out  

## Tech Stack
- Node.js  
- Playwright  
- JavaScript
- Page Object Model  
- Allure for test reporting  
- Screenshots captured on test failure  

## How to Run
1. Clone the repository  
2. Install dependencies: `npm install`  
3. Run tests: `npx playwright test`  
4. Screenshots will be saved automatically (usually in `test-results/` folder)  
5. Generate Allure report: `npx allure generate allure-results --clean -o allure-report`  
6. Open Allure report: `npx allure open allure-report`  
<img width="1850" height="913" alt="image" src="https://github.com/user-attachments/assets/d54fdb78-6bb6-4e6f-8bc8-dbeaedd3ec5b" />

<img width="1852" height="913" alt="image" src="https://github.com/user-attachments/assets/4c3f06b4-5ec3-4228-a8f4-b99dc5065c0d" />

