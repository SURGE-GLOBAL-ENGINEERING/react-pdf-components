import {
    Image as RPDFImage,
    Page as RPDFPage,
    View as RPDFView,
    StyleSheet,
} from '@surge-global-engineering/rpdf-renderer';
import { Style } from '@surge-global-engineering/rpdf-types';
import { FC } from 'react';
import { appendUrl } from '../../utils';
import {
    Calculator,
    calculateValues,
} from '../../utils/transform-layout-values';
import Footer, { FooterStyle } from './footer';
import Header, { HeaderStyle } from './header';

export interface ChapterProps {
  backgroundImageSrc?: string;
  backgroundImageStyles?: Pick<Style, 'opacity'>;
  disableImageSrcURLAppends?: boolean;
  style?: Style;

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
  spaceBetweenBodyAndFooter?: number | string;
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
  footerStyles?: Pick<FooterStyle, 'fontFamily' | 'fontSize' | 'minHeight'>;
  headerStyles?: Pick<HeaderStyle, 'fontFamily' | 'fontSize' | 'minHeight'> &
    Pick<Style, 'marginBottom'>;
  /**
   * Depreciated attribute. Use pageNumberContainerWidth instead
   */
  pageNumberMargin?: number | string;
  pageNumberContainerWidth?: number | string;
  assumeUsingOnlyFirstPage?: boolean;
  firstPageLightText?: boolean;
}

export const Chapter: FC<ChapterProps> = ({
  backgroundImageSrc,
  backgroundImageStyles,
  disableImageSrcURLAppends = false,
  style,
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
  spaceBetweenBodyAndFooter = 10,
  paddingTop,
  pageNumberMargin,
  pageNumberContainerWidth,
  footerStyles,
  headerStyles,
  children,
  headerHiddenPages,
  footerHiddenPages,
  assumeUsingOnlyFirstPage = false,
  firstPageLightText = false,
}) => {
  const getPagePaddingBottom = () => {
    const paddingBottomWithoutFooter = calculateValues(
      paddingBottom as string | number,
      spaceBetweenBodyAndFooter,
      Calculator.add
    );
    return calculateValues(
      paddingBottomWithoutFooter,
      footerStyles?.minHeight || 0,
      Calculator.add
    );
  };

  const styleSheet = StyleSheet.create({
    common: {
      marginOutside,
      marginInside,
      color:
        firstPageLightText && assumeUsingOnlyFirstPage ? '#ffffff' : '#000000',
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
      height: '100%',
    },
    page: {
      paddingBottom: getPagePaddingBottom(),
      paddingTop,
      ...style,
    },
    headerContainer: {
      minHeight: headerStyles?.minHeight || 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: headerStyles?.marginBottom || 0,
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
      {/* full-bleed bg-image */}

      {backgroundImageSrc && assumeUsingOnlyFirstPage && (
        <RPDFView fixed style={styleSheet.fullBleedImageContainer}>
          <RPDFImage
            src={
              backgroundImageSrc && !disableImageSrcURLAppends
                ? appendUrl(backgroundImageSrc, { renderer: 'pdf' })
                : backgroundImageSrc
            }
            style={styleSheet.fullBleedImage}
          />
        </RPDFView>
      )}

      {/* header */}

      <RPDFView fixed style={[styleSheet.headerContainer, styleSheet.common]}>
        <Header
          evenPageHeaderText={evenPageHeaderText}
          pageHeaderAlignment={pageHeaderAlignment}
          oddPageHeaderText={oddPageHeaderText}
          isPageNumberHidden={pageNumberPosition === 'bottom'}
          transformedPageNumber={getTransformedPageNumber}
          pageNumberContainerWidth={
            pageNumberContainerWidth || pageNumberMargin
          }
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
            minHeight: getPagePaddingBottom(),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'stretch',
            paddingTop: spaceBetweenBodyAndFooter,
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
            styles={{
              ...footerStyles,
              minHeight: headerStyles?.minHeight,
            }}
          />
        )}
      </RPDFView>
    </RPDFPage>
  );
};
