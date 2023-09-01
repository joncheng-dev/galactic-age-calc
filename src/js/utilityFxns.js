export function earthYearsDifference(presentAge, pastAge) {
  console.log(presentAge);
  if (typeof presentAge !== "number") {
    return null;
  } else if (presentAge <= 0 || pastAge <= 0) {
    return null;
  } else {
    let differenceInYears = presentAge - pastAge;
    return differenceInYears;
  }
}
