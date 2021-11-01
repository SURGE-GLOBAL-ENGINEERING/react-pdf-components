import {
  Image as RPDFImage,
  Page as RPDFPage,
  StyleSheet,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
import Footer, { FooterStyle } from './footer';
import Header, { HeaderStyle } from './header';

export interface ChapterProps {
  backgroundImageSrc?: string;

  // default page size will be A4
  pageWidth?: string | number;
  pageHeight?: string | number;

  marginOutside?: string | number;
  marginInside?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;

  //Header - Footer config
  pageNumberPosition: 'top' | 'bottom';
  pageNumberAlignment: 'outside' | 'center';

  /**
   * default pageHeaderAlignment = 'center'
   */
  evenPageHeaderText?: string;
  oddPageHeaderText?: string;
  pageHeaderAlignment?: 'outside' | 'center';

  // eslint-disable-next-line no-unused-vars
  getTransformedPageNumber: (pageNumber: number) => string;

  /**
   * Header nad Footer styles for `fontFamily` and `fontSize`
   */
  footerStyles?: Pick<FooterStyle, 'fontFamily' | 'fontSize'>;
  headerStyles?: Pick<HeaderStyle, 'fontFamily' | 'fontSize'>;
}

export const Chapter: FC<ChapterProps> = ({
  backgroundImageSrc,
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
  paddingTop,
  footerStyles,
  headerStyles,
  children,
}) => {
  const styleSheet = StyleSheet.create({
    common: {
      marginOutside,
      marginInside,
    },
    imageFullBleed: {
      position: 'absolute',
      zIndex: -1,
      width: '100%',
    },
    page: {
      paddingBottom,
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
        <RPDFImage
          src={backgroundImageSrc}
          style={[styleSheet.imageFullBleed]}
        />
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
          styles={headerStyles}
        />
      </RPDFView>

      {/* chapter body */}

      <RPDFView style={[styleSheet.common]}>{children}</RPDFView>

      {/* footer */}

      <RPDFView
        style={[
          {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            minHeight: paddingBottom,
            display: 'flex',
            alignSelf: 'flex-end',
            paddingTop: 2,
          },
          styleSheet.common,
        ]}
        fixed
      >
        {pageNumberAlignment && pageNumberPosition === 'bottom' && (
          <Footer
            transformValue={getTransformedPageNumber}
            pageNumberAlignment={pageNumberAlignment}
            styles={footerStyles}
          />
        )}
      </RPDFView>
    </RPDFPage>
  );
};
