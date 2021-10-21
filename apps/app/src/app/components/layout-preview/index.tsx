import { TextNode } from '@atticus/react-pdf-components-pub';
import { View } from '@react-pdf/renderer';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutPreviewProps {}

const LayoutPreview: FC<LayoutPreviewProps> = () => {
  return (
    <>
      <View>
        <TextNode bold>tempore iure accusamus quibusdam voluptate</TextNode>
        <TextNode bold>tempore iure accusamus quibusdam voluptate</TextNode>
        <TextNode bold>tempore iure accusamus quibusdam voluptate</TextNode>
      </View>
      <TextNode>another text</TextNode>
    </>
  );
};

export default LayoutPreview;
