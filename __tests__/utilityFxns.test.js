import { earthYearsDifference } from "../src/js/utilityFxns.js";

describe("earthYearsDifference utility function", () => {
  test("should take in two parameters, presentAge and pastAge, and return the difference", () => {
    let ageNow = 56;
    let ageThen = 43;
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(13);
  });

  test("should take in two parameters, presentAge and pastAge, and return null if presentAge <= 0", () => {
    let ageNow = 0;
    let ageThen = 5;
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(null);
  });

  test("should take in two parameters, presentAge and pastAge, and return null if pastAge <= 0", () => {
    let ageNow = 1;
    let ageThen = -1;
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(null);
  });

  test("should take in two parameters, presentAge and pastAge, and return null if presentAge is NaN", () => {
    let ageNow = "string";
    let ageThen = 5;
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(null);
  });

  test("should take in two parameters, presentAge and pastAge, and return null if pastAge is NaN", () => {
    let ageNow = 5;
    let ageThen = "string";
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(null);
  });
});
