import {
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import React, { FC } from 'react';
import { appearOnGivenPage } from './appearOnGivenPage';

interface HeaderProps {
  isAbsolutePositioned?: boolean;
  isPageNumberHidden?: boolean;
  // eslint-disable-next-line no-unused-vars
  transformedPageNumber: (pageNo: number) => string;
  evenPageHeaderText?: string;
  oddPageHeaderText?: string;
  pageHeaderAlignment?: 'center' | 'outside';
}
const blacklistPageNumbers = [1];
const IS_DEBUG = false;
const Header: FC<HeaderProps> = ({
  isAbsolutePositioned,
  transformedPageNumber,
  evenPageHeaderText = '',
  oddPageHeaderText = '',
  pageHeaderAlignment = 'center',
  isPageNumberHidden,
}) => {
  const positionValue = isAbsolutePositioned ? 'absolute' : undefined;

  return (
    <>
      {/* even-outside */}

      <RPDFView
        debug={IS_DEBUG}
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        {!isPageNumberHidden && (
          <RPDFText
            style={{
              position: positionValue,
              alignSelf: 'flex-start',
            }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'even',
                transformedPageNumber(pageNumber),
                pageNumber,
                subPageNumber,
                blacklistPageNumbers
              );
            }}
          />
        )}

        {pageHeaderAlignment === 'outside' && (
          <RPDFText
            style={{
              position: positionValue,
              marginLeft: 8,
            }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'even',
                evenPageHeaderText,
                pageNumber,
                subPageNumber,
                blacklistPageNumbers
              );
            }}
          />
        )}
      </RPDFView>

      {/* center header */}

      {pageHeaderAlignment === 'center' && (
        <RPDFView
          style={{ position: 'absolute', width: '100%', top: 0, bottom: 0 }}
        >
          <RPDFText
            debug={IS_DEBUG}
            style={{
              position: positionValue,
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
                  blacklistPageNumbers
                );
              else {
                return appearOnGivenPage(
                  'all',
                  oddPageHeaderText,
                  pageNumber,
                  subPageNumber,
                  blacklistPageNumbers
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
          justifyContent: 'flex-end',
        }}
      >
        {pageHeaderAlignment === 'outside' && (
          <RPDFText
            style={{
              position: positionValue,
              marginRight: 8,
            }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'odd',
                oddPageHeaderText,
                pageNumber,
                subPageNumber,
                blacklistPageNumbers
              );
            }}
          />
        )}

        {!isPageNumberHidden && (
          <RPDFText
            style={{
              position: positionValue,
              alignSelf: 'flex-end',
            }}
            fixed
            render={({ pageNumber, subPageNumber }) => {
              return appearOnGivenPage(
                'odd',
                transformedPageNumber(pageNumber),
                pageNumber,
                subPageNumber,
                blacklistPageNumbers
              );
            }}
          />
        )}
      </RPDFView>
    </>
  );
};

export default Header;
