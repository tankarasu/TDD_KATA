// Internal requirements
import { returnDay, returnMonthIndex } from "./functions"

/**
 * @param day - The day of the month
 * @param month - The month of the year
 * @param year - The year
 * @returns the name of the day
 */
export function displayDayName(day:number, month:string, year: number): string{
  // Constants
  const monthIndex = returnMonthIndex(year, month)

  // Returned value
  return returnDay(day, monthIndex)
}
