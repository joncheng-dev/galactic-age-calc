export default class GalacticAge {
  constructor(eYears) {
    this.mercuryYears = null;
    this.earthYears = eYears;
    this.venusYears = null;
    this.marsYears = null;
    this.jupiterYears = null;
  }

  calcMercuryYears() {
    let eDaysInAYearMercury = 88;
    let eDaysInAYearEarth = 365;
    let mercuryToEarthYearRatio = eDaysInAYearMercury / eDaysInAYearEarth;
    this.mercuryYears = Number(parseFloat(this.earthYears * mercuryToEarthYearRatio).toFixed(2));
  }

  calcVenusYears() {
    let eDaysInAYearVenus = 225;
    let eDaysInAYearEarth = 365;
    let venusToEarthYearRatio = eDaysInAYearVenus / eDaysInAYearEarth;
    this.venusYears = Number(parseFloat(this.earthYears * venusToEarthYearRatio).toFixed(2));
  }

  calcMarsYears() {
    let eDaysInAYearMars = 687;
    let eDaysInAYearEarth = 365;
    let marsToEarthYearRatio = eDaysInAYearMars / eDaysInAYearEarth;
    this.marsYears = Number(parseFloat(this.earthYears * marsToEarthYearRatio).toFixed(2));
  }

  calcJupiterYears() {}
}
