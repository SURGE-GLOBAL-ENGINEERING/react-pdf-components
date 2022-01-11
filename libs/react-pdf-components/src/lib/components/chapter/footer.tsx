import { StyleSheet, Text as RPDFText } from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyle } from '@paladin-analytics/rpdf-types';
import React, { FC } from 'react';
import { appearOnGivenPage } from './appearOnGivenPage';

// const blackListedPages: number[] = [1, 2];
export type FooterStyle = Pick<
  RPDFStyle,
  'position' | 'fontFamily' | 'fontSize'
>;

interface FooterProps {
  pageNumberAlignment: 'outside' | 'center';
  // eslint-disable-next-line no-unused-vars
  transformValue: (pageNumber: number) => string;
  isPageNumberHidden?: boolean;
  styles?: FooterStyle;
  blackListedPages?: number[];
}

const Footer: FC<FooterProps> = ({
  pageNumberAlignment,
  transformValue,
  styles: footerStyles,
  blackListedPages = [],
}) => {
  const styles = StyleSheet.create({
    text: {
      ...footerStyles,
      minHeight: footerStyles?.fontSize,
    },
  });

  if (pageNumberAlignment === 'center') {
    return (
      <RPDFText
        style={[styles.text, { alignSelf: 'center' }]}
        fixed
        render={({ pageNumber, subPageNumber }) => {
          return appearOnGivenPage(
            'all',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            blackListedPages
          );
        }}
      />
    );
  }

  return (
    <>
      <RPDFText
        style={[styles.text, { alignSelf: 'flex-end' }]}
        fixed
        render={({ pageNumber, subPageNumber }) => {
          return appearOnGivenPage(
            'odd',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            blackListedPages
          );
        }}
      />

      <RPDFText
        style={[styles.text, { alignSelf: 'flex-start' }]}
        fixed
        render={({ pageNumber, subPageNumber }) => {
          return appearOnGivenPage(
            'even',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            blackListedPages
          );
        }}
      />
    </>
  );
};

export default Footer;
