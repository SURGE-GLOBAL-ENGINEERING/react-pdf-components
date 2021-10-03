import './image.module.scss';
import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
  Image as RPDFImage,
} from '@react-pdf/renderer';

/* eslint-disable-next-line */
export interface ImageProps extends ReactPDF.ImageWithSrcProp {}

export function Image(props: ImageProps) {
  return (
    <RPDFView>
      <RPDFImage
        src={
          'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png'
        }
      ></RPDFImage>
    </RPDFView>
  );
}

export default Image;
