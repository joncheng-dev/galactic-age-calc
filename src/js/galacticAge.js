import { earthYearsDifference } from "./utilityFxns";

export default class GalacticAge {
  constructor(eYears) {
    this.mercuryYears = null;
    this.earthYears = eYears;
    this.venusYears = null;
    this.marsYears = null;
    this.jupiterYears = null;
  }

  calcEarthYearsToPlanetYrs(targetPlanet) {
    const eDaysInAYearMercury = 88;
    const eDaysInAYearEarth = 365;
    const eDaysInAYearVenus = 225;
    const eDaysInAYearMars = 687;
    const eDaysInAYearJupiter = 4333;

    switch (targetPlanet) {
      case "mercury":
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

  yearsPassedInMarsYears(ageInAPastDate) {
    let ageDifference = earthYearsDifference(this.earthYears, ageInAPastDate);
    let eDaysInAYearMars = 687;
    let eDaysInAYearEarth = 365;
    let marsToEarthYearRatio = eDaysInAYearMars / eDaysInAYearEarth;
    return Number(parseFloat(ageDifference / marsToEarthYearRatio).toFixed(2));
  }

  yearsPassedInJupiterYears(ageInAPastDate) {
    let ageDifference = earthYearsDifference(this.earthYears, ageInAPastDate);
    let eDaysInAYearJupiter = 4333;
    let eDaysInAYearEarth = 365;
    let jupiterToEarthYearRatio = eDaysInAYearJupiter / eDaysInAYearEarth;
    return Number(parseFloat(ageDifference / jupiterToEarthYearRatio).toFixed(2));
  }

  yearsPassedInTargetPlanetYears(targetPlanet, ageInAPastDate) {
    const eDaysInAYearMercury = 88;
    const eDaysInAYearEarth = 365;
    const eDaysInAYearVenus = 225;
    const eDaysInAYearMars = 687;
    const eDaysInAYearJupiter = 4333;

    let ageDifference = earthYearsDifference(this.earthYears, ageInAPastDate);

    switch (targetPlanet) {
      case "mercury":
        return Number(parseFloat(ageDifference / (eDaysInAYearMercury / eDaysInAYearEarth)).toFixed(2));
      case "venus":
        return Number(parseFloat(ageDifference / (eDaysInAYearVenus / eDaysInAYearEarth)).toFixed(2));
      case "mars":
        return Number(parseFloat(ageDifference / (eDaysInAYearMars / eDaysInAYearEarth)).toFixed(2));
      case "jupiter":
        break;
      default:
        break;
    }
  }
}
