import {
  Image as RPDFImage,
  Page as RPDFPage,
  StyleSheet,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
import Footer from './footer';
import Header from './header';
interface ChapterProps {
  backgroundImageSrc?: string;

  // default page size will be A4
  pageWidth?: string | number;
  pageHeight?: string | number;

  marginOutside?: string | number;
  marginInside?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;

  //Header - Footer config
  pageNumberPosition?: 'top' | 'bottom'; // if undefined page number will not render
  pageNumberAlignment?: 'outside' | 'center'; // if undefined page number will not render
  evenPageHeaderText?: string;
  oddPageHeaderText?: string;
  pageHeaderAlignment?: 'outside' | 'center';

  // eslint-disable-next-line no-unused-vars
  getTransformedPageNumber: (pageNumber: number) => string;
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
            minHeight: 20,
            position: 'absolute',
            top: 20,
            left: 0,
            right: 0,
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
        />
      </RPDFView>

      {/* chapter body */}

      <RPDFView style={[styleSheet.common]}>{children}</RPDFView>

      {/* footer */}

      <RPDFView
        style={[
          {
            position: 'absolute',
            bottom: 30,
            left: 0,
            right: 0,
            minHeight: 20,
          },
          styleSheet.common,
        ]}
        fixed
      >
        {pageNumberAlignment && pageNumberPosition === 'bottom' && (
          <Footer
            transformValue={getTransformedPageNumber}
            pageNumberAlignment={pageNumberAlignment}
          />
        )}
      </RPDFView>
    </RPDFPage>
  );
};
