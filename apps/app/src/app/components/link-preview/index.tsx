import { FC } from 'react';
import { Page } from '@react-pdf/renderer';
import { Link, TextNode } from '@atticus/react-pdf-components';

const LinkPreview: FC = () => {
  return (
    <Page size="A4">
      <TextNode>
        <Link src="https://google.com">Link to google here</Link>
      </TextNode>
    </Page>
  );
};

export default LinkPreview;
