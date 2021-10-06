import { TextNode, useTheme } from '@atticus/react-pdf-components';
import { Page, Text } from '@react-pdf/renderer';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FontPreviewProps {}

const FontPreview: FC<FontPreviewProps> = () => {
  const theme = useTheme();

  return (
    <Page wrap size="A4">
      <TextNode fontSize={50} bold>
        Sample Word
      </TextNode>
      <Text style={[{ fontFamily: 'LifeSaversBold' }]}>somthign</Text>
      <TextNode style={[{ fontFamily: 'LifeSaversBold' }]} fontSize={50} bold>
        Sample Word
      </TextNode>
    </Page>
  );
};

export default FontPreview;
