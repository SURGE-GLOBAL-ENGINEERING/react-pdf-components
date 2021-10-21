import { Text as RPDFText } from '@paladin-analytics/rpdf-renderer';
import React, { FC } from 'react';
import { appearOnGivenPage } from './appearOnGivenPage';

interface FooterProps {
  isAbsolutePositioned?: boolean;
  isPageNumberHidden?: boolean;
  pageNumberAlignment: 'outside' | 'center';
  transformValue: (pageMo: number) => string;
}

const Footer: FC<FooterProps> = ({
  isAbsolutePositioned,
  pageNumberAlignment,
  transformValue,
}) => {
  const positionValue = isAbsolutePositioned ? 'absolute' : undefined;

  if (pageNumberAlignment === 'center') {
    return (
      <RPDFText
        style={{
          position: positionValue,
          alignSelf: 'center',
        }}
        fixed
        render={({ pageNumber, subPageTotalPages, subPageNumber }) => {
          return appearOnGivenPage(
            'all',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            [1]
          );
        }}
      />
    );
  }

  return (
    <>
      <RPDFText
        style={{
          position: positionValue,
          alignSelf: 'flex-end',
        }}
        fixed
        render={({ pageNumber, subPageTotalPages, subPageNumber }) => {
          return appearOnGivenPage(
            'odd',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            [1]
          );
        }}
      />

      <RPDFText
        style={{
          position: positionValue,
          alignSelf: 'flex-start',
        }}
        fixed
        render={({ pageNumber, subPageTotalPages, subPageNumber }) => {
          return appearOnGivenPage(
            'even',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            [1]
          );
        }}
      />
    </>
  );
};

export default Footer;
