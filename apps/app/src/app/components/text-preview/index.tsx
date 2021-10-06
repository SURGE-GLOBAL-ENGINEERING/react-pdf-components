import { TextNode, useTheme } from '@atticus/react-pdf-components';
import { Page } from '@react-pdf/renderer';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextPreviewProps {}

const TextPreview: FC<TextPreviewProps> = () => {
  const theme = useTheme();

  return (
    <Page style={[{ ...theme }]} wrap size="A4">
      <TextNode fontSize={50} bold>
        Sample Word
      </TextNode>
      <TextNode fontSize={40} bold strikeThrough>
        Sample
        <TextNode fontSize={20} smallCaps>
          Word
        </TextNode>
      </TextNode>
      <TextNode fontSize={40}>
        Sample
        <TextNode smallCaps> Word</TextNode>
      </TextNode>
      <TextNode fontSize={30} bold underline>
        Sample Word
      </TextNode>
      <TextNode fontSize={20} bold italic>
        Sample Word
      </TextNode>
      <TextNode fontSize={20} bold italic strikeThrough underline>
        Sample Word
      </TextNode>
      <TextNode fontSize={16}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        qui eos
        <TextNode bold>tempore iure accusamus quibusdam voluptate</TextNode>
        quod asperiores provident, quo deleniti vel velit ducimus suscipit vitae
        error ipsam debitis.
      </TextNode>
      <TextNode> </TextNode>
      <TextNode fontSize={16} code>
        Code, ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        qui eosquod asperiores provident, quo deleniti vel velit ducimus
        suscipit vitae error ipsam debitis.
      </TextNode>
      <TextNode> </TextNode>

      <TextNode fontSize={16}>
        Monospace,
        <TextNode fontSize={20} underline>
          ipsum dolor sit amet consectetur
        </TextNode>
        <TextNode italic>adipisicing elit.</TextNode> Numquam fugiat qui eosquod
        asperiores provident, quo deleniti vel velit ducimus
        <TextNode fontSize={20} subscript>
          Sample Word
        </TextNode>
        suscipit vitae error ipsam debitis.
      </TextNode>
    </Page>
  );
};

export default TextPreview;
