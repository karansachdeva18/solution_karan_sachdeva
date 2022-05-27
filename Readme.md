
### Create the Subset of IP clicks

### Requirements

Given an array of clicks, return the subset of clicks where:

1. For each IP within each one hour period, only the most expensive click is placed into the
   result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour
   period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
   of those clicks in the result set.
   The result set should be stored in an array of objects. Each object should represent a click. The
   expected result set should be a subset of the original array.

### Prerequisites

Kindly install the Node to run the solution on your system.

### Files

1.  `index.js` - The main entry point of the solution.
2.  `createIPSubset.js` - The main logic is written in this file which consumes click.json to generate the output.
3.  `result-set.js` - The final is saved in this file.
4.  `createIPSubset.test.js` - Execute the test cases.
5.  `mockTest.js` - contains the mock input and output data for testing.

#### Test Case

JEST has been used for the unit testing.

### Installation

Unzip the file and open in the IDE.
Run the npm install command to install the packages.

### Execute the code

Command to run the code: npm run solution

Command to run the test cases: npm run test
