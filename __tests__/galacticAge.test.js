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
    newInstance.convertEarthYrsToPlanetYrs("Mercury");
    expect(newInstance.mercuryYears).toEqual(0.24);
  });
  test("should take the 'this.earthYears' value and use it to calculate venus years, updating this.venusYears with its answer set to 2 decimal places", () => {
    newInstance.convertEarthYrsToPlanetYrs("Venus");
    expect(newInstance.venusYears).toEqual(0.62);
  });
  test("should take the 'this.earthYears' value and use it to calculate mars years, updating this.marsYears with its answer set to 2 decimal places", () => {
    newInstance.convertEarthYrsToPlanetYrs("Mars");
    expect(newInstance.marsYears).toEqual(1.88);
  });
  test("should take the 'this.earthYears' value and use it to calculate jupiter years, updating this.jupiterYears with its answer set to 2 decimal places", () => {
    newInstance.convertEarthYrsToPlanetYrs("Jupiter");
    expect(newInstance.jupiterYears).toEqual(11.87);
  });
  test("should take any argument not one of the strings - 'Mercury', 'Venus', 'Mars', 'Jupiter' -- and be undefined", () => {
    newInstance.convertEarthYrsToPlanetYrs(0);
    expect(newInstance.convertEarthYrsToPlanetYrs(0)).toBeUndefined();
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

  // method convertYrsDifferenceToTargetPlanetYrs -- use a past year, calculate number of years to present
  test("should take in two parameters -- 'target planet' (in this case, Mercury), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Mercury years that have passed", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Mercury", ageThen);
    expect(conversion).toEqual(53.92);
  });
  test("should take in two parameters -- 'target planet' (in this case, Venus), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Venus years that have passed", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Venus", ageThen);
    expect(conversion).toEqual(21.09);
  });
  test("should take in two parameters -- 'target planet' (in this case, Mars), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Mars years that have passed", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Mars", ageThen);
    expect(conversion).toEqual(6.91);
  });
  test("should take in two parameters -- 'target planet' (in this case, Jupiter), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Jupiter years that have passed", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Jupiter", ageThen);
    expect(conversion).toEqual(1.1);
  });
  test("should take in two parameters -- 'target planet' (in this case, a non-accepted value), and 'how many years passed since a past birthday' and be undefined.", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs(0, ageThen);
    expect(conversion).toBeUndefined();
  });
  test("should take in two parameters -- 'target planet' (in this case, Mercury), and an invalid number for 'how many years passed since a past birthday' and be undefined.", () => {
    ageThen = -3;
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Mercury", ageThen);
    expect(conversion).toBeUndefined();
  });
  test("should take in two parameters -- 'target planet' (in this case, Earth), and 'how many years passed since a past birthday'. Method uses the user's current Earth age property to calculate and return the number of Earth years that have passed", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Earth", ageThen);
    expect(conversion).toEqual(13);
  });
});

describe("GalacticAge Method to Calculate Earth Years Until a Future Date on Converted to Years Until on Different Planets", () => {
  let usersEarthAge;
  let newInstance;
  let ageInFuture;

  beforeEach(() => {
    usersEarthAge = 56;
    newInstance = new GalacticAge(usersEarthAge);
    ageInFuture = 61;
  });

  // method convertYrsDifferenceToTargetPlanetYrs -- use a future year, how many years until target date
  test("should take in two parameters -- 'target planet' (in this case, Mercury), and 'how many years until a future date'. Method uses the user's current Earth age property to calculate and return the number of Mercury years that will need to elapse", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Mercury", ageInFuture);
    expect(conversion).toEqual(20.74);
  });
  test("should take in two parameters -- 'target planet' (in this case, Venus), and 'how many years until a future date'. Method uses the user's current Earth age property to calculate and return the number of Venus years that will need to elapse", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Venus", ageInFuture);
    expect(conversion).toEqual(8.11);
  });
  test("should take in two parameters -- 'target planet' (in this case, Mars), and 'how many years until a future date'. Method uses the user's current Earth age property to calculate and return the number of Mars years that will need to elapse", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Mars", ageInFuture);
    expect(conversion).toEqual(2.66);
  });
  test("should take in two parameters -- 'target planet' (in this case, Jupiter), and 'how many years until a future date'. Method uses the user's current Earth age property to calculate and return the number of Jupiter years that will need to elapse", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Jupiter", ageInFuture);
    expect(conversion).toEqual(0.42);
  });
  test("should take in two parameters -- 'target planet' (in this case, Earth), and 'how many years until a future date'. Method uses the user's current Earth age property to calculate and return the number of Earth years that will need to elapse", () => {
    let conversion = newInstance.convertYrsDifferenceToTargetPlanetYrs("Earth", ageInFuture);
    expect(conversion).toEqual(5);
  });
});

describe("GalacticAge Method - createConvertedPlanetYrsString", () => {
  let usersEarthAge;
  let newInstance;

  beforeEach(() => {
    usersEarthAge = 1;
    newInstance = new GalacticAge(usersEarthAge);
  });

  test("should use the result of calling the convertEarthYrsToPlanetYrs method and return a string response  -- for usersEarthAge 1, and target planet Mercury.", () => {
    let planetOfInterest = "Mercury";
    let stringResponse = newInstance.createConvertedPlanetYrsString(planetOfInterest);
    expect(stringResponse).toEqual("You are 1 year(s) old on Earth, and 0.24 years old on Mercury.");
  });
  test("should use the result of calling the convertEarthYrsToPlanetYrs method and return a string response  -- for usersEarthAge 1, and invalid alpha char string", () => {
    let planetOfInterest = "intergalactic";
    let stringResponse = newInstance.createConvertedPlanetYrsString(planetOfInterest);
    expect(stringResponse).toEqual(undefined);
  });
  test("should use the result of calling the convertEarthYrsToPlanetYrs method and return a string response  -- for usersEarthAge 1, and alpha char numerical string", () => {
    let planetOfInterest = "r2d2";
    let stringResponse = newInstance.createConvertedPlanetYrsString(planetOfInterest);
    expect(stringResponse).toEqual(undefined);
  });
  test("should use the result of calling the convertEarthYrsToPlanetYrs method and return a string response  -- for usersEarthAge 1, and target planet Venus.", () => {
    let planetOfInterest = "Venus";
    let stringResponse = newInstance.createConvertedPlanetYrsString(planetOfInterest);
    expect(stringResponse).toEqual("You are 1 year(s) old on Earth, and 0.62 years old on Venus.");
  });
  test("should use the result of calling the convertEarthYrsToPlanetYrs method and return a string response  -- for usersEarthAge 1, and target planet Mars.", () => {
    let planetOfInterest = "Mars";
    let stringResponse = newInstance.createConvertedPlanetYrsString(planetOfInterest);
    expect(stringResponse).toEqual("You are 1 year(s) old on Earth, and 1.88 years old on Mars.");
  });
  test("should use the result of calling the convertEarthYrsToPlanetYrs method and return a string response  -- for usersEarthAge 1, and target planet Jupiter.", () => {
    let planetOfInterest = "Jupiter";
    let stringResponse = newInstance.createConvertedPlanetYrsString(planetOfInterest);
    expect(stringResponse).toEqual("You are 1 year(s) old on Earth, and 11.87 years old on Jupiter.");
  });
  test("should use the result of calling the convertEarthYrsToPlanetYrs method and return a string response  -- for usersEarthAge 1, and target planet Mercury.", () => {
    newInstance.earthYears = 2;
    let planetOfInterest = "Mercury";
    let stringResponse = newInstance.createConvertedPlanetYrsString(planetOfInterest);
    expect(stringResponse).toEqual("You are 2 year(s) old on Earth, and 0.48 years old on Mercury.");
  });
});

describe("GalacticAge Method - createYrsPassedOnTargetPlanetString", () => {
  let usersEarthAge;
  let newInstance;
  let ageThen;

  beforeEach(() => {
    usersEarthAge = 56;
    newInstance = new GalacticAge(usersEarthAge);
    ageThen = 43;
  });

  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 13 Earth years have passed, converted to target planet Mercury years", () => {
    let stringResponse = newInstance.createYrsPassedOnTargetPlanetString("mercury", ageThen);
    expect(stringResponse).toEqual("53.92 Mercury year(s) have passed.");
  });
  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 13 Earth years have passed, converted to target planet Venus years", () => {
    let stringResponse = newInstance.createYrsPassedOnTargetPlanetString("venus", ageThen);
    expect(stringResponse).toEqual("21.09 Venus year(s) have passed.");
  });
  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 13 Earth years have passed, converted to target planet Mars years", () => {
    let stringResponse = newInstance.createYrsPassedOnTargetPlanetString("mars", ageThen);
    expect(stringResponse).toEqual("6.91 Mars year(s) have passed.");
  });
  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 13 Earth years have passed, converted to target planet Jupiter years", () => {
    let stringResponse = newInstance.createYrsPassedOnTargetPlanetString("jupiter", ageThen);
    expect(stringResponse).toEqual("1.1 Jupiter year(s) have passed.");
  });
});

describe("GalacticAge Method - createYrsYetToPassOnTargetPlanetString", () => {
  let usersEarthAge;
  let newInstance;
  let ageInFuture;

  beforeEach(() => {
    usersEarthAge = 56;
    newInstance = new GalacticAge(usersEarthAge);
    ageInFuture = 61;
  });

  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 5 years have yet to pass, converted to target planet Mercury years", () => {
    let stringResponse = newInstance.createYrsYetToPassOnTargetPlanetString("mercury", ageInFuture);
    expect(stringResponse).toEqual("20.74 Mercury year(s) have yet to pass.");
  });
  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 5 years have yet to pass, converted to target planet Venus years", () => {
    let stringResponse = newInstance.createYrsYetToPassOnTargetPlanetString("venus", ageInFuture);
    expect(stringResponse).toEqual("8.11 Venus year(s) have yet to pass.");
  });
  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 5 years have yet to pass, converted to target planet Mars years", () => {
    let stringResponse = newInstance.createYrsYetToPassOnTargetPlanetString("mars", ageInFuture);
    expect(stringResponse).toEqual("2.66 Mars year(s) have yet to pass.");
  });
  test("should use the result of calling the convertYrsDifferenceToTargetPlanetYrs method and return a string response -- for 5 years have yet to pass, converted to target planet Jupiter years", () => {
    let stringResponse = newInstance.createYrsYetToPassOnTargetPlanetString("jupiter", ageInFuture);
    expect(stringResponse).toEqual("0.42 Jupiter year(s) have yet to pass.");
  });
});
