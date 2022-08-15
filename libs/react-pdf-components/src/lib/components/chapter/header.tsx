import {
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyle } from '@paladin-analytics/rpdf-types';
import { FC } from 'react';
import { appearOnGivenPage } from './appearOnGivenPage';

// const BLACKLIST_PAGE_NUMBERS: number[] = [1, 2];

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
  pageNumberContainerWidth?: number | string;
  styles?: HeaderStyle;
  blackListedPages?: number[];
}

const Header: FC<HeaderProps> = ({
  transformedPageNumber,
  evenPageHeaderText = '',
  oddPageHeaderText = '',
  pageHeaderAlignment = 'center',
  isPageNumberHidden,
  pageNumberContainerWidth = 30,
  styles,
  blackListedPages = [],
}) => {
  const contentHeight = Number(styles?.fontSize) * 2 || styles?.minHeight;

  // This approach uses a fixed width for the page number, as specified by `pageNumberContainerWidth`
  // The required width will vary across books based on the font-family, and font-size used.
  // Therefore, the width can be customized at the consumer level of this library (Eg: atticus-editor)
  // A proposed approach is to leave enough width to print '9999 ' (and ' 9999').

  return (
    <>
      <RPDFView
        fixed
        style={{
          position: 'absolute',
          height: contentHeight,
          width: '100%',
          left: 0,
          top: 0,
          overflow: 'hidden',
        }}
      >
        {/* Even Pages */}
        <RPDFView
          style={{
            position: 'absolute',
            height: contentHeight,
            width: '100%',
            left: 0,
            top: 0,
          }}
        >
          {/* Header Title */}
          <RPDFView
            style={{
              position: 'absolute',
              height: contentHeight,
              width: '100%',
              left: 0,
              top: 0,
              paddingLeft: isPageNumberHidden ? 0 : pageNumberContainerWidth,
            }}
          >
            <RPDFText
              style={{
                fontFamily: styles?.fontFamily,
                fontSize: styles?.fontSize,
                maxLines: 1,
                textOverflow: 'ellipsis',
                textAlign: pageHeaderAlignment === 'center' ? 'center' : 'left',
              }}
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
          </RPDFView>

          {/* Page Number */}
          {!isPageNumberHidden && (
            <RPDFView style={{ display: 'flex', flex: 1 }}>
              <RPDFText
                style={{
                  textAlign: 'left',
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                }}
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
            </RPDFView>
          )}
        </RPDFView>

        {/* Odd Pages */}
        <RPDFView
          style={{
            position: 'absolute',
            height: contentHeight,
            width: '100%',
            left: 0,
            top: 0,
          }}
        >
          {/* Header Title */}
          <RPDFView
            style={{
              position: 'absolute',
              height: contentHeight,
              width: '100%',
              left: 0,
              top: 0,
              paddingRight: isPageNumberHidden ? 0 : pageNumberContainerWidth,
            }}
          >
            <RPDFText
              style={{
                fontFamily: styles?.fontFamily,
                fontSize: styles?.fontSize,
                maxLines: 1,
                textOverflow: 'ellipsis',
                textAlign:
                  pageHeaderAlignment === 'center' ? 'center' : 'right',
              }}
              render={({ pageNumber, subPageNumber }) => {
                return appearOnGivenPage(
                  'odd',
                  oddPageHeaderText,
                  pageNumber,
                  subPageNumber,
                  blackListedPages
                );
              }}
            />
          </RPDFView>

          {/* Page Number */}
          {!isPageNumberHidden && (
            <RPDFView style={{ display: 'flex', flex: 1 }}>
              <RPDFText
                style={{
                  textAlign: 'right',
                  fontFamily: styles?.fontFamily,
                  fontSize: styles?.fontSize,
                }}
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
            </RPDFView>
          )}
        </RPDFView>
      </RPDFView>
    </>
  );
};

export default Header;
