import {
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyle } from '@paladin-analytics/rpdf-types';
import React, { FC } from 'react';
import { appearOnGivenPage } from './appearOnGivenPage';

// const BLACKLIST_PAGE_NUMBERS: number[] = [1, 2];
const IS_DEBUG = false;

export type HeaderStyle = Pick<
  RPDFStyle,
  'position' | 'fontFamily' | 'fontSize' | 'minHeight'
>;

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  transformedPageNumber: (pageNumber: number) => string;
  isPageNumberHidden?: boolean;
  evenPageHeaderText?: string;
  oddPageHeaderText?: string;
  pageHeaderAlignment?: 'center' | 'outside';
  pageNumberMargin?: number | string;
  styles?: HeaderStyle;
  blackListedPages?: number[];
}

const Header: FC<HeaderProps> = ({
  transformedPageNumber,
  evenPageHeaderText = '',
  oddPageHeaderText = '',
  pageHeaderAlignment = 'center',
  isPageNumberHidden,
  pageNumberMargin = 30,
  styles,
  blackListedPages = [],
}) => {
  return (
    <>  
      <RPDFView
        fixed
        style={{
          minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
          height: Number(styles?.fontSize)*1.5,
        }}
      >

        {/* Even Side */}

        <RPDFView 
          style={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
            height: Number(styles?.fontSize)*1.5,
            top: 0,
            left: 0,
          }}
        >

          {/* even-outside */}
      
          <RPDFView
            debug={IS_DEBUG}
            style={{
              display: 'flex',
              flexDirection: 'row',
              minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
              height: Number(styles?.fontSize)*1.5,
            }}
          >
            {!isPageNumberHidden && (
              <RPDFText
                style={{
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                  marginRight: pageNumberMargin,
                }}
                fixed
                render={({ pageNumber, subPageNumber }) => {
                  return appearOnGivenPage(
                    'even',
                    transformedPageNumber(pageNumber),
                    pageNumber,
                    subPageNumber,
                    blackListedPages
                  );
                }}
              />
            )}

            {pageHeaderAlignment === 'outside' && (
              <RPDFText
                style={{
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                  textOverflow: 'ellipsis',
                  marginRight: 31,
                }}
                fixed
                render={({ pageNumber, subPageNumber }) => {
                  return appearOnGivenPage(
                    'even',
                    evenPageHeaderText,
                    pageNumber,
                    subPageNumber,
                    blackListedPages
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
                minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
                height: Number(styles?.fontSize)*1.5,
              }}
            >
              <RPDFText
                debug={IS_DEBUG}
                style={{
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                  textAlign: 'center',
                  textOverflow: 'ellipsis',
                }}
                fixed
                render={({ pageNumber, subPageNumber }) => {
                  if (pageNumber % 2 === 0)
                    return appearOnGivenPage(
                      'all',
                      evenPageHeaderText,
                      pageNumber,
                      subPageNumber,
                      blackListedPages
                    );
                  else {
                    return "";
                  }
                }}
              />
            </RPDFView>
          )}

          {pageHeaderAlignment === 'outside' && (
            <RPDFView
              style={{
                width: '100%',
                display: 'flex',
                minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
                height: Number(styles?.fontSize)*1.5,
              }}
            >
              <RPDFText
                debug={IS_DEBUG}
                style={{
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                  textAlign: 'center',
                  textOverflow: 'ellipsis',
                }}
                fixed
                render={({ pageNumber }) => {
                  if (pageNumber % 2 === 0)
                    return "";
                  else {
                    return "";
                  }
                }}
              />
            </RPDFView>
          )}

        </RPDFView>

        {/* Odd Pages */}

        <RPDFView 
          style={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
            height: Number(styles?.fontSize)*1.5,
            top: 0,
            left: 0,
            position: 'absolute',
            marginRight: 5,
            width: '100%',
          }}
        >

          {/* center header */}

          {pageHeaderAlignment === 'center' && (
            <RPDFView
              style={{
                width: '100%',
                display: 'flex',
                minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
                height: Number(styles?.fontSize)*1.5,
              }}
            >
              <RPDFText
                debug={IS_DEBUG}
                style={{
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                  textAlign: 'center',
                  textOverflow: 'ellipsis',
                  marginRight: 10,
                  ...(!isPageNumberHidden &&{
                    marginRight: pageNumberMargin,
                  }),
                }}
                fixed
                render={({ pageNumber, subPageNumber }) => {
                  if (pageNumber % 2 === 0)
                    return '';
                  else {
                    return appearOnGivenPage(
                      'all',
                      oddPageHeaderText,
                      pageNumber,
                      subPageNumber,
                      blackListedPages
                    );
                  }
                }}
              />
            </RPDFView>
          )}

          {pageHeaderAlignment === 'outside' && (
            <RPDFView
              style={{
                width: '100%',
                display: 'flex',
                minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
                height: Number(styles?.fontSize)*1.5,
                ...(!isPageNumberHidden && {
                  marginRight: pageNumberMargin,
                }),
                
              }}
            >
              <RPDFText
                debug={IS_DEBUG}
                style={{
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                  textAlign: 'right',
                  textOverflow: 'ellipsis',
                }}
                fixed
                render={({ pageNumber, subPageNumber }) => {
                  if (pageNumber % 2 === 0)
                    return '';
                  else {
                    return appearOnGivenPage(
                      'all',
                      oddPageHeaderText,
                      pageNumber,
                      subPageNumber,
                      blackListedPages
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
              display: 'flex',
              flexDirection: 'row',
              minHeight: Number(styles?.fontSize)*1.5 || styles?.minHeight, 
              height: Number(styles?.fontSize)*1.5,
            }}
          >
            {!isPageNumberHidden && (
              <RPDFText
                style={{
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                  ...(pageHeaderAlignment === 'outside' && {
                    marginLeft: pageNumberMargin,
                    marginRight: 10,
                  }),
                }}
                fixed
                render={({ pageNumber, subPageNumber }) => {
                  return appearOnGivenPage(
                    'odd',
                    transformedPageNumber(pageNumber),
                    pageNumber,
                    subPageNumber,
                    blackListedPages
                  );
                }}
              />
            )}
          </RPDFView>

        </RPDFView>

      </RPDFView>
           
    </>
  );
};

export default Header;
