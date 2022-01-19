import {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
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
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'auto',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      alignContent: 'stretch',
    },
  });

  return (
    <RPDFView style={styles.container}>
      <RPDFText
        style={[styles.text]}
        render={({ pageNumber, subPageNumber }) => {
          if (pageNumberAlignment === 'center') {
            return '';
          }
          return appearOnGivenPage(
            'even',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            blackListedPages
          );
        }}
      ></RPDFText>
      <RPDFText
        style={[styles.text]}
        render={({ pageNumber, subPageNumber }) => {
          if (pageNumberAlignment === 'outside') {
            return '';
          }
          return appearOnGivenPage(
            'all',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            blackListedPages
          );
        }}
      ></RPDFText>
      <RPDFText
        style={[styles.text]}
        render={({ pageNumber, subPageNumber }) => {
          if (pageNumberAlignment === 'center') {
            return '';
          }
          return appearOnGivenPage(
            'odd',
            transformValue(pageNumber),
            pageNumber,
            subPageNumber,
            blackListedPages
          );
        }}
      ></RPDFText>
    </RPDFView>
  );
};

export default Footer;
