// Constants
const yearIndexArray = [1, 2, 3, 4, 5, 6, 7];

export function returnCenturyIndex(year: number, yearIndex: number): number {
  let century: number =
    year >= 1000 ?
    parseInt(year.toString().slice(0,2)) :
    parseInt(year.toString().slice(0,1));

  switch (century) {
    case 15: case 19: case 23:
      return (yearIndexArray[yearIndex]+ 1) % 7;
    case 17: case 21:
      return (yearIndexArray[yearIndex]+ 5) % 7;
    case 18: case 22:
      return (yearIndexArray[yearIndex]+ 3) % 7;
    case 16: case 20: case 24:
      return yearIndexArray[yearIndex];
    default:
      return 0
  }
}

