const createSubset = require("./createIPSubset");
const mockTest = require("./mockTest");

describe("test cases for IP clicks subset", () => {
  test("should throw an error if called without an arg", () => {
    expect(() => createSubset().toThrow("No input provided"));
  });
  test("compare the output length of test result data and actual result ", () => {
    expect(createSubset(mockTest.testInput).length).toEqual(
      mockTest.testOutput.length
    );
  });
});
