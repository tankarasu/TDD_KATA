/**
 * @description this method return an index of century depends on the year
 * @param year the year to check
 * @param yearIndex the index of the year
 * @returns - an index used in monthIndex array
 */
export function returnCenturyIndex(year: number, yearIndex: number): number {
  const yearIndexArray = [1, 2, 3, 4, 5, 6, 7];
  let rawIndex = yearIndexArray[yearIndex]
  let century: number =
    year >= 1000 ?
    parseInt(year.toString().slice(0,2)) :
    parseInt(year.toString().slice(0,1));

  switch (century) {
    case 15:
      return (rawIndex + 4) % 7;
    case 19: case 23:
      return (rawIndex + 1) % 7;
    case 17: case 21:
      return (rawIndex + 5) % 7;
    case 18: case 22:
      return (rawIndex + 3) % 7;
    case 16: case 20: case 24:
      return (rawIndex) % 7;
    default:
      return 0
  }
}

