export function earthYearsDifference(age1, age2) {
  if (typeof age1 !== "number" || typeof age2 !== "number") {
    return null;
  } else if (age1 <= 0 || age2 <= 0) {
    return null;
  } else {
    let differenceInYears = Math.abs(age1 - age2);
    return differenceInYears;
  }
}
