import GalacticAge from "../src/js/galacticAge.js";

describe("GalacticAge constructor", () => {
  test("should correctly generate an instance of GalacticAge class, taking a parameter of Earth years, setting its value to property 'this.earthYears', and all other properties' values set to 'null'", () => {
    let usersEarthAge = 50;
    const newInstance = new GalacticAge(usersEarthAge);
    expect(newInstance.mercuryYears).toEqual(null);
    expect(newInstance.earthYears).toEqual(50);
    expect(newInstance.venusYears).toEqual(null);
    expect(newInstance.marsYears).toEqual(null);
    expect(newInstance.jupiterYears).toEqual(null);
  });
});

describe("GalacticAge Methods to Calculate Different Planets' Years Relative to Earth", () => {
  let usersEarthAge;
  let newInstance;

  beforeEach(() => {
    usersEarthAge = 1;
    newInstance = new GalacticAge(usersEarthAge);
  });

  // method for calc different planet years
  test("should take the 'this.earthYears' value and use it to calculate mercury years, updating this.mercuryYears with its answer set to 2 decimal places", () => {
    newInstance.calcEarthYearsToPlanetYrs("mercury");
    expect(newInstance.mercuryYears).toEqual(0.24);
  });
  test("should take the 'this.earthYears' value and use it to calculate venus years, updating this.venusYears with its answer set to 2 decimal places", () => {
    newInstance.calcEarthYearsToPlanetYrs("venus");
    expect(newInstance.venusYears).toEqual(0.62);
  });
  test("should take the 'this.earthYears' value and use it to calculate mars years, updating this.marsYears with its answer set to 2 decimal places", () => {
    newInstance.calcEarthYearsToPlanetYrs("mars");
    expect(newInstance.marsYears).toEqual(1.88);
  });
  test("should take the 'this.earthYears' value and use it to calculate jupiter years, updating this.jupiterYears with its answer set to 2 decimal places", () => {
    newInstance.calcEarthYearsToPlanetYrs("jupiter");
    expect(newInstance.jupiterYears).toEqual(11.87);
  });
  test("should take any argument not one of the strings - 'mercury', 'venus', 'mars', 'jupiter' -- and be undefined", () => {
    newInstance.calcEarthYearsToPlanetYrs(0);
    expect(newInstance.calcEarthYearsToPlanetYrs(0)).toBeUndefined();
  });
});

describe("GalacticAge Methods to Calculate Years Passed on Different Planets Relative to Earth Years", () => {
  let usersEarthAge;
  let newInstance;
  let ageThen;

  beforeEach(() => {
    usersEarthAge = 56;
    newInstance = new GalacticAge(usersEarthAge);
    ageThen = 43;
  });

  // method yearsPassedInTargetPlanetYears
  test("should take in two parameters -- 'target planet' (in this case, Mercury), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Mercury years that have passed", () => {
    let conversion = newInstance.yearsPassedInTargetPlanetYears("mercury", ageThen);
    expect(conversion).toEqual(53.92);
  });
  test("should take in two parameters -- 'target planet' (in this case, Venus), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Venus years that have passed", () => {
    let conversion = newInstance.yearsPassedInTargetPlanetYears("venus", ageThen);
    expect(conversion).toEqual(21.09);
  });
  test("should take in two parameters -- 'target planet' (in this case, Mars), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Mars years that have passed", () => {
    let conversion = newInstance.yearsPassedInTargetPlanetYears("mars", ageThen);
    expect(conversion).toEqual(6.91);
  });
  test("should take in two parameters -- 'target planet' (in this case, Jupiter), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Jupiter years that have passed", () => {
    let conversion = newInstance.yearsPassedInTargetPlanetYears("jupiter", ageThen);
    expect(conversion).toEqual(1.1);
  });
  test("should take in two parameters -- 'target planet' (in this case, Jupiter), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Jupiter years that have passed", () => {
    let conversion = newInstance.yearsPassedInTargetPlanetYears("jupiter", ageThen);
    expect(conversion).toEqual(1.1);
  });
  test("should take in two parameters -- 'target planet' (in this case, a non-accepted value), and 'how many years passed since a past birthday' and be undefined.", () => {
    let conversion = newInstance.yearsPassedInTargetPlanetYears(0, ageThen);
    expect(conversion).toBeUndefined();
  });
  test("should take in two parameters -- 'target planet' (in this case, Mercury), and an invalid number for 'how many years passed since a past birthday' and be undefined.", () => {
    ageThen = -3;
    let conversion = newInstance.yearsPassedInTargetPlanetYears(0, ageThen);
    expect(conversion).toBeUndefined();
  });
});
