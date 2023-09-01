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
});
