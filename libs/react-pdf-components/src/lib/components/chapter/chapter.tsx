import ReactPDF, {
  Image as RPDFImage,
  Page as RPDFPage,
  StyleSheet,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
import Footer from './footer';
import Header from './header';

interface ChapterProps extends ReactPDF.PageProps {
  backgroundImageSrc?: string;
  styles?: ReactPDF.Styles;

  // pageWidth: string | number;
  // pageHeight: string | number;

  marginOutSide?: string | number;
  marginInside?: string | number;

  //Header - Footer config
  pageNumberPosition?: 'top' | 'bottom'; // if undefined page number will not render
  pageNumberAlignment?: 'outside' | 'center'; // if undefined page number will not render

  evenPageHeaderText?: string;
  oddPageHeaderText?: string;
  pageHeaderAlignment?: 'outside' | 'center';
  getTransformedPageNumber: (pageNumber: number) => string;
}

export const Chapter: FC<ChapterProps> = ({
  backgroundImageSrc,
  marginInside,
  marginOutSide,
  pageNumberPosition,
  pageNumberAlignment,
  evenPageHeaderText,
  oddPageHeaderText,
  pageHeaderAlignment,
  getTransformedPageNumber,
  // chapterCardProps,
  children,
  ...pageProps
}) => {
  const styleSheet = StyleSheet.create({
    common: {
      marginOutside: marginOutSide,
      marginInside: marginInside,
    },
    imageFullBleed: {
      position: 'absolute',
      zIndex: -1,
      width: '100%',
    },
  });

  return (
    <RPDFPage {...pageProps}>
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
