/**
 * @param day
 * @param monthIndex
 * @returns one day of the week
 */
export function returnDay(day: number, monthIndex: number): string{
  const dayArray = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const dayIndex: number = ((day % 7) + (monthIndex -1)) % 7;

  return dayArray[dayIndex];
}
