export function calculateInterest(
  capital: number,
  interestAnualPercentage: number,
  months: number
) {
  return capital * (interestAnualPercentage / 100) * (months / 12);
}
