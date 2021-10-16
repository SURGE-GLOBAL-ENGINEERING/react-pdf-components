import ReactPDF, {
  Image as RPDFImage,
  Link as RPDFLink,
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { FunctionComponent } from 'react';
import './image.module.scss';
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
  captionTextStyles?: ReactPDF.Styles;
  size?: number; //Percentage of parent element
  link?: string;
}
const IS_DEBUG = false;
function ImageCore({
  caption,
  captionAlignment = 'left',
  size,
  link,
  captionTextStyles,
  ...rPDFImageProps
}: ImageCoreProps) {
  const styles = StyleSheet.create({
    image: {
      width: '100%',
    },
    container: {
      width: `${size || 100}%`,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      marginBottom: '10px',
      textAlign: captionAlignment,
    },
    caption: {
      width: '96%',
      fontStyle: 'italic',
      color: '#3568ba',
      textDecoration: 'none',
    },
  });

  return (
    <RPDFView style={[styles.container]} debug={IS_DEBUG}>
      <RPDFLink src={link || ''}>
        <RPDFImage
          debug={IS_DEBUG}
          style={[styles.image]}
          {...rPDFImageProps}
        />
        {caption && (
          <RPDFText
            debug={IS_DEBUG}
            style={[styles.caption, captionTextStyles ?? {}]}
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
    // TODO implement the wrapping logic
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
