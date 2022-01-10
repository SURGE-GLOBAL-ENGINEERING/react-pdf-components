export const appendUrl = (
  srcUrl: string,
  queryParams: { [key: string]: string | number }
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queryParameterString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key as any]}`)
    .join('&');

  /**
   * For the urls like htttps://domain.com/images/123.jpeg?width=234
   */
  if (/.*\?((.*=.*)(&?))+/g.test(srcUrl)) {
    return `${srcUrl}&${queryParameterString}`;
  }

  /**
   * For the urls like htttps://domain.com/images/123.jpeg?
   */
  if (/.*\?((.*=.*)(&?))+|(.*\?)/g.test(srcUrl)) {
    return `${srcUrl}${queryParameterString}`;
  }

  /**
   * For the urls like htttps://domain.com/images/123.jpeg
   */
  return `${srcUrl}?${queryParameterString}`;
};
