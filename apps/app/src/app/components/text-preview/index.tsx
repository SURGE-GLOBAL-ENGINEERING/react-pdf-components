import { Page, TextNode } from '@paladin-analytics/react-pdf-components';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextPreviewProps {}
/*
 * *bold
 * *italic
 * *underline
 * *strikethrough
 * *superscript
 * *subscript
 * *smallcaps
 */
const TextPreview: FC<TextPreviewProps> = () => {
  return (
    <Page wrap size="A4">
      <TextNode fontSize={40}>font size : 40</TextNode>
      <TextNode bold>Bold</TextNode>
      <TextNode italic>italic</TextNode>
      <TextNode underline>Underline</TextNode>
      <TextNode strikeThrough>StrikeThrough</TextNode>
      <TextNode smallCaps>Small-Caps</TextNode>
      <TextNode>
        2<TextNode superscript>3</TextNode>
      </TextNode>
      <TextNode>
        H<TextNode subscript>2</TextNode>O
      </TextNode>
      <TextNode>
        -------------------------------------------------------------------------
      </TextNode>
      <TextNode fontSize={20}>
        <TextNode bold>Bold With Font Size</TextNode>
      </TextNode>
      <TextNode fontSize={20}>
        <TextNode italic>Italic With Font Size</TextNode>
      </TextNode>
      <TextNode fontSize={20}>
        <TextNode underline>Underline With Font Size</TextNode>
      </TextNode>
      <TextNode fontSize={20}>
        <TextNode strikeThrough>StrikeThrough With Font Size</TextNode>
      </TextNode>
      <TextNode fontSize={20}>
        <TextNode smallCaps>Small-Caps With Parent Font Size</TextNode>
      </TextNode>
      <TextNode fontSize={20}>
        1000<TextNode superscript>2</TextNode>
      </TextNode>
      <TextNode fontSize={20}>
        H<TextNode subscript>2</TextNode>O
      </TextNode>
      <TextNode>
        -------------------------------------------------------------------------
      </TextNode>
      <TextNode fontSize={20}>
        <TextNode bold italic underline strikeThrough>
          bold italic underline strike-through With Font Size
        </TextNode>
      </TextNode>
      <TextNode>
        -------------------------------------------------------------------------
      </TextNode>
      <TextNode smallCaps bold italic underline>
        Small-Caps Bold Italic Underline
      </TextNode>
      <TextNode smallCaps strikeThrough>
        Small-Caps Strike-Through
      </TextNode>
      <TextNode>
        -------------------------------------------------------------------------
      </TextNode>
      <TextNode fontSize={20} bold italic underline>
        1000<TextNode superscript>2</TextNode> : bold italic underline
      </TextNode>
      <TextNode fontSize={20} strikeThrough>
        1000<TextNode superscript>2</TextNode> : strikeThrough
      </TextNode>
      <TextNode fontSize={20} bold italic underline>
        H<TextNode subscript>2</TextNode>O : bold italic underline
      </TextNode>
      <TextNode fontSize={20} strikeThrough>
        H<TextNode subscript>2</TextNode>O : strikeThrough
      </TextNode>
      <TextNode>
        -------------------------------------------------------------------------
      </TextNode>
      <TextNode fontSize={16}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        qui eos
        <TextNode bold>tempore iure accusamus quibusdam voluptate</TextNode>
        quod asperiores provident, quo deleniti vel velit ducimus suscipit vitae
        error ipsam debitis.
      </TextNode>
      <TextNode>
        1. <TextNode>Listed item</TextNode>
      </TextNode>
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
        <TextNode subscript>Sample</TextNode> suscipit vitae error ipsam
        debitis.
      </TextNode>
      <TextNode lineHeight={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TextNode>
    </Page>
  );
};

export default TextPreview;
