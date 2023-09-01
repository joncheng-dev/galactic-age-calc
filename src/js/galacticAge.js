export default class GalacticAge {
  constructor(eYears) {
    this.mercuryYears = null;
    this.earthYears = eYears;
    this.venusYears = null;
    this.marsYears = null;
    this.jupiterYears = null;
  }

  calcMercuryYears() {
    let eDaysInOneYearMercury = 88;
    let eDaysInOneYearEarth = 365;
    let mercuryToEarthYearRatio = eDaysInOneYearMercury / eDaysInOneYearEarth;
    this.mercuryYears = Number(parseFloat(this.earthYears * mercuryToEarthYearRatio).toFixed(2));
  }
}
