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
    let eDaysInAYearMercury = 88;
    let eDaysInAYearEarth = 365;
    let eDaysInAYearVenus = 225;
    let eDaysInAYearMars = 687;
    let eDaysInAYearJupiter = 4333;

    let eDaysInTargetPlanetsYear;
    switch (targetPlanet) {
      case "mercury":
        eDaysInTargetPlanetsYear = eDaysInAYearMercury;
        this.mercuryYears = Number(parseFloat((eDaysInTargetPlanetsYear / eDaysInAYearEarth) * this.earthYears).toFixed(2));
        break;
      case "venus":
        eDaysInTargetPlanetsYear = eDaysInAYearVenus;
        break;
      case "mars":
        eDaysInTargetPlanetsYear = eDaysInAYearMars;
        break;
      case "jupiter":
        eDaysInTargetPlanetsYear = eDaysInAYearJupiter;
        break;
      default:
        break;
    }
  }

  calcVenusYears() {
    let eDaysInAYearVenus = 225;
    let eDaysInAYearEarth = 365;
    this.venusYears = Number(parseFloat((eDaysInAYearVenus / eDaysInAYearEarth) * this.earthYears).toFixed(2));
  }

  calcMarsYears() {
    let eDaysInAYearMars = 687;
    let eDaysInAYearEarth = 365;
    this.marsYears = Number(parseFloat((eDaysInAYearMars / eDaysInAYearEarth) * this.earthYears).toFixed(2));
  }

  calcJupiterYears() {
    let eDaysInAYearJupiter = 4333;
    let eDaysInAYearEarth = 365;
    this.jupiterYears = Number(parseFloat((eDaysInAYearJupiter / eDaysInAYearEarth) * this.earthYears).toFixed(2));
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
