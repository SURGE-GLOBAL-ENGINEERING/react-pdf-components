import ReactPDF, {
  Image as RPDFImage,
  Link as RPDFLink,
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style } from '@paladin-analytics/rpdf-types';
import { FunctionComponent } from 'react';
import { appendUrl } from '../../utils';

/**
 * Atticus Image Features
 *  - caption -> string
    - alignment
    - wrap
    - size -> percentage
    - link -> string
 */

type alignmentType = 'left' | 'center' | 'right';
/* eslint-disable-next-line */
interface ImageCoreProps extends ReactPDF.ImageWithSrcProp {
  caption?: string;
  captionAlignment?: alignmentType;
  captionTextStyles?: Style;
  imageContainerStyle?: Style;
  /**
   * As a percentage of the width of the parent element
   */
  width?: number; //Percentage of parent element
  link?: string;
  disableURLAppends?: boolean;
}

const IS_DEBUG = false;

function ImageCore({
  caption,
  captionAlignment = 'left',
  width,
  link,
  captionTextStyles,
  imageContainerStyle,
  disableURLAppends = false,
  ...rPDFImageProps
}: ImageCoreProps) {
  const styles = StyleSheet.create({
    image: {
      width: '100%',
    },
    container: {
      width: `${width || 100}%`,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: captionAlignment,
    },
    caption: {
      width: '100%',
      fontStyle: 'italic',
      textDecoration: 'none',
      color: '#000000',
    },
    linkStyle: {
      textDecoration: 'none',
    },
  });

  const imageSrc =
    rPDFImageProps.src && !disableURLAppends
      ? appendUrl(rPDFImageProps.src.toString(), {
          renderer: 'pdf',
        })
      : rPDFImageProps.src;

  return (
    <RPDFView
      style={[styles.container, imageContainerStyle || {}]}
      debug={IS_DEBUG}
    >
      <RPDFLink src={link || ''} style={styles.linkStyle}>
        <RPDFImage
          debug={IS_DEBUG}
          style={[styles.image]}
          {...rPDFImageProps}
          src={imageSrc}
        />
        {caption && (
          <RPDFText
            debug={IS_DEBUG}
            style={[styles.caption, captionTextStyles || {}]}
          >
            {caption}
          </RPDFText>
        )}
      </RPDFLink>
    </RPDFView>
  );
}

interface ImageProps extends ImageCoreProps {
  alignment?: alignmentType;
  wrap?: boolean;
}

const alignmentToCSSMap: Record<
  alignmentType,
  'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | undefined
> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export const Image: FunctionComponent<ImageProps> = ({
  alignment = 'left',
  wrap = false,
  ...coreImageProps
}) => {
  return wrap ? (
    <RPDFView>
      <ImageCore captionAlignment={alignment} {...coreImageProps}></ImageCore>
    </RPDFView>
  ) : (
    <RPDFView
      wrap={false}
      debug={IS_DEBUG}
      style={{
        width: '100%',
        alignItems: alignmentToCSSMap[alignment],
      }}
    >
      <ImageCore captionAlignment={alignment} {...coreImageProps}></ImageCore>
    </RPDFView>
  );
};

export default Image;
