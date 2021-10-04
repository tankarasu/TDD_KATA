/**
 * @description Check if the year is bissextile
 * @param {number} year - the year to check
 * @returns boolean - true if the year is bissextile
 */
export function isBissextile(year: number): boolean {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
