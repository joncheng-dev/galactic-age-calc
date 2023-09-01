import { earthYearsDifference } from "../src/js/utilityFxns.js";

describe("earthYearsDifference utility function", () => {
  test("should take in two parameters, presentAge and pastAge, and return the difference", () => {
    let ageNow = 56;
    let ageThen = 43;
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(13);
  });

  test("should take in two parameters, presentAge and pastAge, and return null if presentAge is not > 1", () => {
    let ageNow = 0;
    let ageThen = 5;
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(null);
  });
});
