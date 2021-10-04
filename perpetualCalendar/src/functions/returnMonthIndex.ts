import { isBissextile, returnCenturyIndex, returnYearIndex } from "./index";

export function returnMonthIndex(year: number, month: string){
  let monthIndex: number = 0;
  let centuryIndex: number = returnCenturyIndex(year, returnYearIndex(year));
  switch(month){
    case "Feb": case "Aug":
      monthIndex = 1;
      break;
    case "Nov": case "Mar":
      monthIndex = 2;
      break;
    case "Jun":
      monthIndex = 3;
      break;
    case "Sep": case "Dec":
      monthIndex = 4;
      break;
    case "Jan": case "Apr": case "Jul":
      monthIndex = 5;
      break;
    case "Oct":
      monthIndex = 6;
      break;
    default:
      monthIndex = 0;
      break;
    }

    const yearArray = [ 1, 2, 3, 4, 5, 6, 7];
  let result: number = (yearArray[monthIndex] + centuryIndex) % 7;

  (!(isBissextile(year)) && (month === "Jan" || month === "Feb"))?
  result++:
  result;

  return result % 7;
}
