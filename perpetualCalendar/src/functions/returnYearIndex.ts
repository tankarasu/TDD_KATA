export function returnYearIndex(year: number): number {
  switch (year % 100) {
    case 0: case 6: case 17: case 23: case 28: case 34: case 45:
    case 51: case 56: case 62: case 73: case 79: case 84: case 90:
      return 0;

    case 1: case 7: case 12: case 18: case 29:
    case 35: case 40: case 46: case 57: case 63:
    case 68: case 74: case 85: case 91: case 96:
      return 1;

    case 2: case 13: case 19: case 24: case 30: case 41: case 47:
    case 52: case 58: case 69: case 75: case 80: case 86: case 97:
      return 2;

    case 3: case 8: case 14: case 25: case 31:
    case 36: case 42: case 53: case 59: case 64:
    case 70: case 81: case 87: case 92: case 98:
      return 3;

    case 9 :case 15: case 20: case 26: case 37: case 43: case 48:
    case 54: case 65: case 71: case 76: case 82: case 93: case 99:
      return 4;

    case 4 :case 10: case 21: case 27: case 32: case 38: case 49:
    case 55: case 60: case 66: case 77: case 83: case 88: case 94:
      return 5;

    case 5 :case 11: case 16: case 22: case 33: case 39: case 44:
    case 50: case 61: case 67: case 72: case 78: case 89: case 95:
      return 6;

    default:
      return 0
  }
}
