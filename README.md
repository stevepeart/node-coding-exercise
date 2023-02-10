## Remove Duplicates From Mock Knack Application Schema

Knack is a no-code platform that includes an online database. Knack users will at times, through unexpected API usage or an unknown bug, corrupt their application schemas. One common issue they may run into is having duplicate fields and/or objects in their application schema. These duplicates cannot be removed by the Knack UI and lead to TypeErrors and other problems.

The purpose of this coding exercise is to create a Node.js application that can programmatically remove all duplicate fields and objects from the given mock application schema and output a new sanitized version.

The "mock_application.json" file in this repository contains data which represents an actual Knack application schema including all currently existing properties. Your code should process the data, remove any duplicates, and output a new JSON file "clean_application.json" which retains all other properties of the Knack application.

Within a standard Knack application there is a `versions` property which has 2 collections:
1. `objects`: an array of Knack "objects" which contains "fields"
2. `scenes`: an array of Knack "scenes" which contains "views"

### Installation
- Make sure you are using the latest NodeJS (Currently v19.6.0)
- Clone this repository
- From the project directory, run either `yarn` or `npm install`
- To build the application, run `yarn build` or `npm run build`
- If you want to make changes to the code, you can run `yarn watch` or `npm run watch` to have the build update when you save changes

### Using the application
- To de-dupe a Knack Application Schema:
  - From the command line, run `yarn dupefix ./mock_application.json ./clean_application.json` or the npm equivalent
  - Optionally, you can add the `--debug` flag to the command to see ouput of the results during the process

#### Examples:
  `yarn dupefix ./mock_application.json ./clean_application.json`
  `yarn dupefix ./mock_application.json ./clean_application.json --debug`
  `yarn dupefix` - Will output a Usage message with help on how to run the script

### Testing the application
  - From the project root directory, run `yarn test` or `npm run test`
  - Tests are written using Jest