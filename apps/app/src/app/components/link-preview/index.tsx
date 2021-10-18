import { Link, TextNode } from '@atticus/react-pdf-components';
import { Page } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';

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
