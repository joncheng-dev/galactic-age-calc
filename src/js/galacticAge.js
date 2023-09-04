import { earthYearsDifference, firstCharUpperCase } from "./utilityFxns";

export default class GalacticAge {
  constructor(eYears) {
    this.mercuryYears = null;
    this.earthYears = eYears;
    this.venusYears = null;
    this.marsYears = null;
    this.jupiterYears = null;
  }

  convertEarthYrsToPlanetYrs(targetPlanet) {
    const eDaysInAYearMercury = 88;
    const eDaysInAYearEarth = 365;
    const eDaysInAYearVenus = 225;
    const eDaysInAYearMars = 687;
    const eDaysInAYearJupiter = 4333;

    switch (targetPlanet) {
      case "Mercury":
        this.mercuryYears = Number(parseFloat((eDaysInAYearMercury / eDaysInAYearEarth) * this.earthYears).toFixed(2));
        break;
      case "Venus":
        this.venusYears = Number(parseFloat((eDaysInAYearVenus / eDaysInAYearEarth) * this.earthYears).toFixed(2));
        break;
      case "Mars":
        this.marsYears = Number(parseFloat((eDaysInAYearMars / eDaysInAYearEarth) * this.earthYears).toFixed(2));
        break;
      case "Jupiter":
        this.jupiterYears = Number(parseFloat((eDaysInAYearJupiter / eDaysInAYearEarth) * this.earthYears).toFixed(2));
        break;
      default:
        break;
    }
  }

  convertYrsDifferenceToTargetPlanetYrs(targetPlanet, numYrsIntoPastOrFuture) {
    const eDaysInAYearMercury = 88;
    const eDaysInAYearEarth = 365;
    const eDaysInAYearVenus = 225;
    const eDaysInAYearMars = 687;
    const eDaysInAYearJupiter = 4333;

    let ageDifference = earthYearsDifference(this.earthYears, numYrsIntoPastOrFuture);
    if (ageDifference === null) {
      return undefined;
    } else {
      switch (targetPlanet) {
        case "Mercury":
          return Number(parseFloat(ageDifference / (eDaysInAYearMercury / eDaysInAYearEarth)).toFixed(2));
        case "Earth":
          return Number(parseFloat(ageDifference / (eDaysInAYearEarth / eDaysInAYearEarth)).toFixed(2));
        case "Venus":
          return Number(parseFloat(ageDifference / (eDaysInAYearVenus / eDaysInAYearEarth)).toFixed(2));
        case "Mars":
          return Number(parseFloat(ageDifference / (eDaysInAYearMars / eDaysInAYearEarth)).toFixed(2));
        case "Jupiter":
          return Number(parseFloat(ageDifference / (eDaysInAYearJupiter / eDaysInAYearEarth)).toFixed(2));
        default:
          break;
      }
    }
  }

  createConvertedPlanetYrsString(targetPlanet) {
    this.convertEarthYrsToPlanetYrs(targetPlanet);
    let targetPlanetStringFormatChecked = firstCharUpperCase(targetPlanet);

    switch (targetPlanetStringFormatChecked) {
      case "Mercury":
        return `You are ${this.earthYears} year(s) old on Earth, and ${this.mercuryYears} years old on ${targetPlanetStringFormatChecked}.`;
      case "Venus":
        return `You are ${this.earthYears} year(s) old on Earth, and ${this.venusYears} years old on ${targetPlanetStringFormatChecked}.`;
      case "Mars":
        return `You are ${this.earthYears} year(s) old on Earth, and ${this.marsYears} years old on ${targetPlanetStringFormatChecked}.`;
      case "Jupiter":
        return `You are ${this.earthYears} year(s) old on Earth, and ${this.jupiterYears} years old on ${targetPlanetStringFormatChecked}.`;
      default:
        break;
    }
  }

  createYrsPassedOnTargetPlanetString(targetPlanet, numYrsIntoPast) {
    let targetPlanetStringFormatChecked = firstCharUpperCase(targetPlanet);
    let yearsPassedResults = this.convertYrsDifferenceToTargetPlanetYrs(targetPlanetStringFormatChecked, numYrsIntoPast);

    return `${yearsPassedResults} ${targetPlanetStringFormatChecked} year(s) have passed.`;
  }

  createYrsYetToPassOnTargetPlanetString(targetPlanet, numYrsIntoFuture) {
    let targetPlanetStringFormatChecked = firstCharUpperCase(targetPlanet);
    let yearsUntilResults = this.convertYrsDifferenceToTargetPlanetYrs(targetPlanetStringFormatChecked, numYrsIntoFuture);

    return `${yearsUntilResults} ${targetPlanetStringFormatChecked} year(s) have yet to pass.`;
  }
}
