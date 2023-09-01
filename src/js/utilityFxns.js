export function earthYearsDifference(presentAge, pastAge) {
  if (typeof presentAge !== "number" || typeof pastAge !== "number") {
    return null;
  } else if (presentAge <= 0 || pastAge <= 0) {
    return null;
  } else {
    let differenceInYears = presentAge - pastAge;
    return differenceInYears;
  }
}
