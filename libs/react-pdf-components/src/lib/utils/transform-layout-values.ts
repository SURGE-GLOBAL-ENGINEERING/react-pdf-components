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
