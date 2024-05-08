import { Link, Page } from '@surge-global-engineering/react-pdf-components';
import { FC } from 'react';

const LinkPreview: FC = () => {
  return (
    <Page size="A4">
      <Link src="https://google.com">Link to google here</Link>
    </Page>
  );
};

export default LinkPreview;
