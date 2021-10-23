import {
  ClearFloat,
  Float,
  Image,
  Page,
  TextNode,
} from '@atticus/react-pdf-components';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FloatPreviewProps {}

const FloatPreview: FC<FloatPreviewProps> = () => {
  return (
    <Page style={{ fontSize: 12, fontFamily: 'Open Sans' }} size="A4">
      <TextNode style={{ marginBottom: 20, fontSize: 20 }}>
        Floating Images
      </TextNode>
      <Float direction="left">
        <Image
          width={25}
          style={{ marginRight: 5 }}
          caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          link="https://staging-app.atticus.io/"
          src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
          alignment="center"
        ></Image>
      </Float>
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
        suscipit vitae error ipsam debitis. Numquam fugiat qui eosquod
        asperiores provident, quo deleniti vel velit ducimus.
      </TextNode>
      <ClearFloat />

      <TextNode style={{ marginBottom: 20, fontSize: 20 }}>
        Floating Text
      </TextNode>
      <Float direction="left">
        <TextNode
          style={{
            fontSize: 44,
            marginRight: 5,
            lineHeight: 0.8,
            marginTop: -8,
          }}
        >
          L
        </TextNode>
      </Float>
      <TextNode fontSize={16}>
        orem, ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        qui eos
        <TextNode bold>tempore iure accusamus quibusdam voluptate</TextNode>
        quod asperiores provident, quo deleniti vel velit ducimus suscipit vitae
        error ipsam debitis. Code, ipsum dolor sit amet consectetur adipisicing
        elit. Numquam fugiat qui eosquod asperiores provident, quo deleniti vel
        velit ducimus suscipit vitae error ipsam debitis. Numquam fugiat qui
        eosquod asperiores provident, quo deleniti vel velit ducimus.
      </TextNode>
      <ClearFloat />
    </Page>
  );
};

export default FloatPreview;
