import { Text as RPDFText } from '@paladin-analytics/rpdf-renderer';
import React, { FC } from 'react';
import { appearOnGivenPage } from './appearOnGivenPage';

interface FooterProps {
  isAbsolutePositioned?: boolean;
  isPageNumberHidden?: boolean;
  pageNumberAlignment: 'outside' | 'center';
  // eslint-disable-next-line no-unused-vars
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
        render={({ pageNumber, subPageNumber }) => {
          return appearOnGivenPage(
            'all',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            []
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
        render={({ pageNumber, subPageNumber }) => {
          return appearOnGivenPage(
            'odd',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            []
          );
        }}
      />

      <RPDFText
        style={{
          position: positionValue,
          alignSelf: 'flex-start',
        }}
        fixed
        render={({ pageNumber, subPageNumber }) => {
          return appearOnGivenPage(
            'even',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            []
          );
        }}
      />
    </>
  );
};

export default Footer;
