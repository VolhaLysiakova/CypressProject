# CypressProject
It's a study project for UI and API testing using Page object patterns.

Before running test use should install NodeJS >6.1.0 at your environment: https://nodejs.org/en/download/

To run tests please do the following:
1. Load the project from GitHub https://github.com/VolhaLysiakova/CypressProject
2. Install al the components with the command:

   ```
   npm install
   ```
3. Run all tests:
- in Electron:

  ```
  npx cypress run
  ```
- in Chrome:

  ```
  npx cypress run -b chrome
  ```
4. To record tests in the Cypress Dashboard perform the following command:
- in Electron:

  ```
  npx cypress run --record --key e642edf1-04d2-43e3-87a7-75bcb713790d
  ```
- in Chrome:

  ```
  npx cypress run -b chrome --record --key e642edf1-04d2-43e3-87a7-75bcb713790d
  ```
5. Results are loaded into the Cypress Dashboard:  
   https://dashboard.cypress.io/projects/uwj7wt/runs
   Please, log in with your credentials - since the project is public you will be able to see results and report into this project in case of running of tests at your local env with the key.

