import { TextNode, Image } from '@atticus/react-pdf-components';
import { Page, Image as RPDFImage } from '@react-pdf/renderer';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextPreviewProps {}

const TextPreview: FC<TextPreviewProps> = () => {
  return (
    <Page size="A4">
      <RPDFImage src={'https://via.placeholder.com/150'}></RPDFImage>
      <Image src={'http://localhost:4200/ImagePreview-prev'}></Image>
    </Page>
  );
};

export default TextPreview;
