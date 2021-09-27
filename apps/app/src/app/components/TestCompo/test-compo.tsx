import { Page, Text } from '@react-pdf/renderer';
import React, { FunctionComponent } from 'react';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TestCompoProps { }
const TestCompo: FunctionComponent<TestCompoProps> = () => {
  return (
    <Page size="A4">
      <Text >Booooom!</Text>
    </Page>
  );
};

export default TestCompo;
