export function earthYearsDifference(presentAge, pastAge) {
  if (presentAge <= 0 || pastAge <= 0) {
    return null;
  } else {
    let differenceInYears = presentAge - pastAge;
    return differenceInYears;
  }
}
