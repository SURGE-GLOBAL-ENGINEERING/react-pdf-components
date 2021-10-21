import { Link } from '@atticus/react-pdf-components-pub';
import { Page } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';

const LinkPreview: FC = () => {
  return (
    <Page size="A4">
      <Link src="https://google.com">Link to google here</Link>
    </Page>
  );
};

export default LinkPreview;
