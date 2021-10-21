export const appearOnGivenPage = (
  printSide: 'odd' | 'even' | 'all',
  value: string,
  pageNumber: number,
  subPageNumber: number,
  ignoredPubPages?: number[]
) => {
  if (
    printSide === 'even' &&
    pageNumber % 2 === 0 &&
    (!ignoredPubPages || !ignoredPubPages?.includes(subPageNumber))
  ) {
    return value;
  } else if (
    printSide === 'odd' &&
    pageNumber % 2 !== 0 &&
    (!ignoredPubPages || !ignoredPubPages?.includes(subPageNumber))
  ) {
    return value;
  } else if (
    printSide === 'all' &&
    (!ignoredPubPages || !ignoredPubPages?.includes(subPageNumber))
  ) {
    return value;
  }

  return '';
};
