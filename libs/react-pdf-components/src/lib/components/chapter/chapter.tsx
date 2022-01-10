import {
  Image as RPDFImage,
  Page as RPDFPage,
  StyleSheet,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style } from '@paladin-analytics/rpdf-types';
import { FC } from 'react';
import { appendUrl } from '../../utils';
import Footer, { FooterStyle } from './footer';
import Header, { HeaderStyle } from './header';

export interface ChapterProps {
  backgroundImageSrc?: string;
  backgroundImageStyles?: Pick<Style, 'opacity'>;
  disableImageSrcURLAppends?: boolean;

  // default page size will be A4
  pageWidth?: string | number;
  pageHeight?: string | number;

  marginOutside?: string | number;
  marginInside?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  /**
   * This used to set space between the page content and page number in the footer
   */
  paddingBottomMultiplier?: number;
  //Header - Footer config
  pageNumberPosition: 'top' | 'bottom';
  pageNumberAlignment: 'outside' | 'center';

  /**
   * default pageHeaderAlignment = 'center'
   */
  evenPageHeaderText?: string;
  oddPageHeaderText?: string;
  pageHeaderAlignment?: 'outside' | 'center';
  headerHiddenPages?: number[];
  footerHiddenPages?: number[];

  // eslint-disable-next-line no-unused-vars
  getTransformedPageNumber: (pageNumber: number) => string;

  /**
   * Header nad Footer styles for `fontFamily` and `fontSize`
   */
  pageNumberMargin?: number | string;
  footerStyles?: Pick<FooterStyle, 'fontFamily' | 'fontSize'>;
  headerStyles?: Pick<HeaderStyle, 'fontFamily' | 'fontSize'>;
}

const transformChapterLayoutValues = (
  value?: string | number,
  multiplier = 1
) => {
  if (typeof value === 'string') {
    const strArr = value.split(/(\d+)/).filter(Boolean);
    if (!+strArr[0]) return value;
    const _value = +strArr[0] * multiplier;
    return `${_value}${strArr[1]}`;
  }
  if (typeof value === 'number') {
    return value * multiplier;
  }
  return value;
};

export const Chapter: FC<ChapterProps> = ({
  backgroundImageSrc,
  backgroundImageStyles,
  disableImageSrcURLAppends = false,
  marginInside,
  marginOutside,
  pageNumberPosition,
  pageNumberAlignment,
  evenPageHeaderText,
  oddPageHeaderText,
  pageHeaderAlignment,
  getTransformedPageNumber,

  pageHeight,
  pageWidth,
  paddingBottom,
  paddingBottomMultiplier = 1.5,
  paddingTop,
  pageNumberMargin,
  footerStyles,
  headerStyles,
  children,
  headerHiddenPages,
  footerHiddenPages,
}) => {
  const styleSheet = StyleSheet.create({
    common: {
      marginOutside,
      marginInside,
    },
    fullBleedImageContainer: {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
    },
    fullBleedImage: {
      ...backgroundImageStyles,
      width: '100%',
    },
    page: {
      paddingBottom: transformChapterLayoutValues(
        paddingBottom,
        paddingBottomMultiplier
      ),
      paddingTop,
    },
  });

  return (
    <RPDFPage
      size={
        pageHeight && pageWidth
          ? { width: pageWidth, height: pageHeight }
          : 'A4'
      }
      style={[styleSheet.page]}
    >
      {/* bg-image */}

      {backgroundImageSrc && (
        <RPDFView style={styleSheet.fullBleedImageContainer}>
          <RPDFImage
            src={
              backgroundImageSrc && disableImageSrcURLAppends
                ? appendUrl(backgroundImageSrc, { renderer: 'pdf' })
                : backgroundImageSrc
            }
            style={styleSheet.fullBleedImage}
          />
        </RPDFView>
      )}

      {/* header */}

      <RPDFView
        fixed
        style={[
          {
            minHeight: paddingTop,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          styleSheet.common,
        ]}
      >
        <Header
          evenPageHeaderText={evenPageHeaderText}
          pageHeaderAlignment={pageHeaderAlignment}
          oddPageHeaderText={oddPageHeaderText}
          isPageNumberHidden={pageNumberPosition === 'bottom'}
          transformedPageNumber={getTransformedPageNumber}
          pageNumberMargin={pageNumberMargin}
          blackListedPages={headerHiddenPages}
          styles={headerStyles}
        />
      </RPDFView>

      {/* chapter body */}

      <RPDFView style={[styleSheet.common]}>{children}</RPDFView>

      {/* footer */}

      <RPDFView
        style={[
          {
            // ! adding paddingTop/marginTop will prevent rendering child components
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            minHeight: transformChapterLayoutValues(
              paddingBottom,
              paddingBottomMultiplier
            ),
            display: 'flex',
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            paddingBottom,
          },
          styleSheet.common,
        ]}
        fixed
      >
        {pageNumberAlignment && pageNumberPosition === 'bottom' && (
          <Footer
            blackListedPages={footerHiddenPages}
            transformValue={getTransformedPageNumber}
            pageNumberAlignment={pageNumberAlignment}
            styles={footerStyles}
          />
        )}
      </RPDFView>
    </RPDFPage>
  );
};
