import { Page, TextNode } from '@paladin-analytics/react-pdf-components';
import { Text } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FontPreviewProps {}

const FontPreview: FC<FontPreviewProps> = () => {
  return (
    <Page wrap size="A4">
      <TextNode fontSize={50} bold>
        Sample Word
      </TextNode>
      <Text style={[{ fontFamily: 'LifeSaversBold' }]}>Sample Text</Text>
      <TextNode style={[{ fontFamily: 'LifeSaversBold' }]} fontSize={50} bold>
        Sample Word
      </TextNode>
    </Page>
  );
};

export default FontPreview;
