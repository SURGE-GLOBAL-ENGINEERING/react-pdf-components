export const transformLayoutValues = (
  value?: string | number,
  multiplier = 1
) => {
  if (typeof value === 'string') {
    const strArr = value.split(/(\d+)/).filter(Boolean);
    if (!+strArr[0]) return value;
    const _value = +strArr[0] * multiplier;
    return `${_value}${strArr[1]}`;
  }
  if (typeof value === 'number') {
    return value * multiplier;
  }
  return value;
};

export const calculateValues = (
  value1: string | number,
  value2: string | number,
  // eslint-disable-next-line no-unused-vars
  callback: (value1: number, value2: number) => number
) => {
  if (typeof value1 === 'string' && typeof value2 === 'string') {
    const val1StrArr = value1.split(/(\d+)/).filter(Boolean);
    const val2StrArr = value2.split(/(\d+)/).filter(Boolean);
    const ans = callback(+val1StrArr[0] || 0, +val2StrArr[0] || 0);
    return `${ans}${val1StrArr[1]}`;
  }
  if (typeof value1 === 'string' && typeof value2 === 'number') {
    const val1StrArr = value1.split(/(\d+)/).filter(Boolean);
    const ans = callback(+val1StrArr[0] || 0, value2);
    return `${ans}${val1StrArr[1]}`;
  }
  if (typeof value1 === 'number' && typeof value2 === 'string') {
    const val2StrArr = value2.split(/(\d+)/).filter(Boolean);
    const ans = callback(value1, +val2StrArr[0] || 0);
    return `${ans}${val2StrArr[1]}`;
  }
  return callback(value1 as number, value2 as number);
};

export class Calculator {
  public static add(value1: number, value2: number) {
    return value1 + value2;
  }

  public static sub(value1: number, value2: number) {
    return value1 - value2;
  }
}
