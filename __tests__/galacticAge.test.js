import GalacticAge from "../src/js/galacticAge.js";

describe("GalacticAge", () => {
  test("should correctly generate an instance of GalacticAge class, taking a parameter of Earth years, setting its value to property 'this.earthYears', and all other properties' values set to 'null'", () => {
    let usersEarthAge = 50;
    const newInstance = new GalacticAge(usersEarthAge);
    expect(newInstance.mercuryYears).toEqual(null);
    expect(newInstance.earthYears).toEqual(50);
    expect(newInstance.venusYears).toEqual(null);
    expect(newInstance.marsYears).toEqual(null);
    expect(newInstance.jupiterYears).toEqual(null);
  });

  // method calcMercuryYears
  test("should take the 'this.earthYears' value and use it to calculate mercury years, updating this.mercuryYears with its answer set to 2 decimal places", () => {
    let usersEarthAge = 1;
    const newInstance = new GalacticAge(usersEarthAge);
    newInstance.calcMercuryYears();
    expect(newInstance.mercuryYears).toEqual(0.24);
  });

  // method calcVenusYears
  test("should take the 'this.earthYears' value and use it to calculate venus years, updating this.venusYears with its result set to 2 decimal places", () => {
    let usersEarthAge = 1;
    const newInstance = new GalacticAge(usersEarthAge);
    newInstance.calcVenusYears();
    expect(newInstance.venusYears).toEqual(0.62);
  });

  // method calcMarsYears
  test("should take the 'this.earthYears' value and use it to calculate mars years, updating this.marsYears with its result set to 2 decimal places", () => {
    let usersEarthAge = 1;
    const newInstance = new GalacticAge(usersEarthAge);
    newInstance.calcMarsYears();
    expect(newInstance.marsYears).toEqual(1.88);
  });

  // method calcJupiterYears
  test("should take the 'this.earthYears' value and use it to calculate jupiter years, updating this.jupterYears with its result set to 2 decimal places", () => {
    let usersEarthAge = 1;
    const newInstance = new GalacticAge(usersEarthAge);
    newInstance.calcJupiterYears();
    expect(newInstance.jupiterYears).toEqual(11.87);
  });

  // method yearsPassedInMercuryYears
  test("should take in one parameter -- 'how many years passed since a past birthday' -- then uses the user's current Earth age property to calculate and return the number of Mercury years that have passed", () => {
    let usersEarthAge = 56;
    const newInstance = new GalacticAge(usersEarthAge);
    let ageThen = 43;
    let conversion = newInstance.yearsPassedInMercuryYears(newInstance.earthYears, ageThen);
    expect(conversion).toEqual(54.16);
  });
});
