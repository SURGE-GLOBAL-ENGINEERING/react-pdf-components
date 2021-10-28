import {
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyle } from '@paladin-analytics/rpdf-types';
import React, { FC } from 'react';
import { appearOnGivenPage } from './appearOnGivenPage';

const BLACKLIST_PAGE_NUMBERS = [1];
const IS_DEBUG = false;

export type HeaderStyle = Pick<
  RPDFStyle,
  'position' | 'fontFamily' | 'fontSize'
>;

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  transformedPageNumber: (pageNumber: number) => string;
  isPageNumberHidden?: boolean;
  evenPageHeaderText?: string;
  oddPageHeaderText?: string;
  pageHeaderAlignment?: 'center' | 'outside';
  styles?: HeaderStyle;
}

const Header: FC<HeaderProps> = ({
  transformedPageNumber,
  evenPageHeaderText = '',
  oddPageHeaderText = '',
  pageHeaderAlignment = 'center',
  isPageNumberHidden,
  styles,
}) => {
  return (
    <>
      {/* even-outside */}

      <RPDFView
        debug={IS_DEBUG}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {!isPageNumberHidden && (
          <RPDFText
            style={{ ...styles }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'even',
                transformedPageNumber(pageNumber),
                pageNumber,
                subPageNumber,
                BLACKLIST_PAGE_NUMBERS
              );
            }}
          />
        )}

        {pageHeaderAlignment === 'outside' && (
          <RPDFText
            style={{ ...styles, marginLeft: 8 }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'even',
                evenPageHeaderText,
                pageNumber,
                subPageNumber,
                BLACKLIST_PAGE_NUMBERS
              );
            }}
          />
        )}
      </RPDFView>

      {/* center header */}

      {pageHeaderAlignment === 'center' && (
        <RPDFView
          style={{
            width: '100%',
            display: 'flex',
          }}
        >
          <RPDFText
            debug={IS_DEBUG}
            style={{
              ...styles,
              textAlign: 'center',
            }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              if (pageNumber % 2 === 0)
                return appearOnGivenPage(
                  'all',
                  evenPageHeaderText,
                  pageNumber,
                  subPageNumber,
                  BLACKLIST_PAGE_NUMBERS
                );
              else {
                return appearOnGivenPage(
                  'all',
                  oddPageHeaderText,
                  pageNumber,
                  subPageNumber,
                  BLACKLIST_PAGE_NUMBERS
                );
              }
            }}
          />
        </RPDFView>
      )}

      {/* odd - outside */}

      <RPDFView
        debug={IS_DEBUG}
        style={{
          // flex: 1,
          display: 'flex',
          flexDirection: 'row',
          // justifyContent: 'flex-end',
        }}
      >
        {pageHeaderAlignment === 'outside' && (
          <RPDFText
            style={{ ...styles, marginRight: 8 }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'odd',
                oddPageHeaderText,
                pageNumber,
                subPageNumber,
                BLACKLIST_PAGE_NUMBERS
              );
            }}
          />
        )}

        {!isPageNumberHidden && (
          <RPDFText
            style={{ ...styles }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'odd',
                transformedPageNumber(pageNumber),
                pageNumber,
                subPageNumber,
                BLACKLIST_PAGE_NUMBERS
              );
            }}
          />
        )}
      </RPDFView>
    </>
  );
};

export default Header;
