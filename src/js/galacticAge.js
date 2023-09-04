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
      case "venus":
        this.venusYears = Number(parseFloat((eDaysInAYearVenus / eDaysInAYearEarth) * this.earthYears).toFixed(2));
        break;
      case "mars":
        this.marsYears = Number(parseFloat((eDaysInAYearMars / eDaysInAYearEarth) * this.earthYears).toFixed(2));
        break;
      case "jupiter":
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

    switch (targetPlanet) {
      case "mercury":
        return Number(parseFloat(ageDifference / (eDaysInAYearMercury / eDaysInAYearEarth)).toFixed(2));
      case "earth":
        return Number(parseFloat(ageDifference / (eDaysInAYearEarth / eDaysInAYearEarth)).toFixed(2));
      case "venus":
        return Number(parseFloat(ageDifference / (eDaysInAYearVenus / eDaysInAYearEarth)).toFixed(2));
      case "mars":
        return Number(parseFloat(ageDifference / (eDaysInAYearMars / eDaysInAYearEarth)).toFixed(2));
      case "jupiter":
        return Number(parseFloat(ageDifference / (eDaysInAYearJupiter / eDaysInAYearEarth)).toFixed(2));
      default:
        break;
    }
  }

  createConvertedPlanetYrsString(targetPlanet) {
    let targetPlanetStringFormatChecked = firstCharUpperCase(targetPlanet);
    this.convertEarthYrsToPlanetYrs(targetPlanetStringFormatChecked);

    switch (targetPlanetStringFormatChecked) {
      case "Mercury":
        return `You are ${this.earthYears} year(s) old on Earth, and ${this.mercuryYears} years old on ${targetPlanetStringFormatChecked}.`;
      default:
        break;
    }
  }
}
