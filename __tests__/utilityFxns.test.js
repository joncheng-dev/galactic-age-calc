import { earthYearsDifference, stringToLowerCase } from "../src/js/utilityFxns.js";

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

  // Testing earthYearsDifference to be functional despite switching order of two arguments passed in
  test("should take in two parameters, presentAge and pastAge, and return the difference", () => {
    let ageNow = 43;
    let ageThen = 56;
    let difference = earthYearsDifference(ageNow, ageThen);
    expect(difference).toEqual(13);
  });
});

describe("stringToLowerCase utility function", () => {
  test("should take in any all alpha character string and return it with all lowercased characters", () => {
    let sampleString = "cOfFeE";
    let result = stringToLowerCase(sampleString);
    expect(result).toEqual("coffee");
  });
});
