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

  yearsPassedInMercuryYears(ageInAPastDate) {
    let ageDifference = earthYearsDifference(this.earthYears, ageInAPastDate);
    let eDaysInAYearMercury = 88;
    let eDaysInAYearEarth = 365;
    let mercuryToEarthYearRatio = eDaysInAYearMercury / eDaysInAYearEarth;
    return Number(parseFloat(ageDifference / mercuryToEarthYearRatio).toFixed(2));
  }

  yearsPassedInVenusYears(ageInAPastDate) {
    let ageDifference = earthYearsDifference(this.earthYears, ageInAPastDate);
    let eDaysInAYearVenus = 225;
    let eDaysInAYearEarth = 365;
    let venusToEarthYearRatio = eDaysInAYearVenus / eDaysInAYearEarth;
    return Number(parseFloat(ageDifference / venusToEarthYearRatio).toFixed(2));
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
}
