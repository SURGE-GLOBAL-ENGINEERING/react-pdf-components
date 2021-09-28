import { TextNode } from '@atticus/react-pdf-components';
import { Page } from '@react-pdf/renderer';
import React, { FunctionComponent } from 'react';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TestCompoProps {}
const TestCompo: FunctionComponent<TestCompoProps> = () => {
  return (
    <Page size="A4">
      <TextNode fontSize={50} bold italic>
        Sample Word
      </TextNode>
      <TextNode fontSize={40} bold italic>
        Sample Word
      </TextNode>
      <TextNode fontSize={30} bold italic>
        Sample Word
      </TextNode>
      <TextNode fontSize={20} bold italic>
        Sample Word
      </TextNode>
      <TextNode fontSize={16} italic>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        qui eos{' '}
        <TextNode bold>tempore iure accusamus quibusdam voluptate</TextNode>{' '}
        quod asperiores provident, quo deleniti vel velit ducimus suscipit vitae
        error ipsam debitis.
      </TextNode>
    </Page>
  );
};
export default TestCompo;
