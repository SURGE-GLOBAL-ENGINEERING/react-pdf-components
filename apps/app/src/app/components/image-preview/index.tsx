import { Image } from '@atticus/react-pdf-components';
import { Page } from '@react-pdf/renderer';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextPreviewProps {}

const TextPreview: FC<TextPreviewProps> = () => {
  return (
    <Page style={{ fontSize: 12, fontFamily: 'Open Sans' }} size="A4">
      <Image
        size={25}
        caption={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
        link={'https://staging-app.atticus.io/'}
        src={
          'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg'
        }
        alignment="left"
      ></Image>
      <Image
        size={50}
        src={
          'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg'
        }
        alignment="center"
      ></Image>
      <Image
        size={40}
        caption={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
        alignment={'right'}
        src={
          'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'
        }
      ></Image>
      <Image
        size={30}
        caption={'image size: 30'}
        alignment="center"
        src={
          'https://media.istockphoto.com/photos/view-of-lighthouse-dondra-matara-sri-lanka-picture-id912181808?k=20&m=912181808&s=612x612&w=0&h=m5D1CtXIk9SjiWL_2MTtEcBbOAQpH7yJhUFyM8d7diE='
        }
      ></Image>

      <Image
        caption={'image size: 30'}
        src={
          'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      ></Image>

      <Image
        caption={'image size: 30'}
        size={80}
        alignment={'center'}
        src={
          'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      ></Image>
    </Page>
  );
};

export default TextPreview;
