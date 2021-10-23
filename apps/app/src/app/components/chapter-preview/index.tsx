import { Chapter, TextNode } from '@atticus/react-pdf-components';
import { Text, View } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ChapterPreview {}

const ChapterPreview: FC<ChapterPreview> = () => {
  return (
    <>
      <Chapter
        evenPageHeaderText="SOME COOL GUY"
        oddPageHeaderText="Cool Chapter"
        getTransformedPageNumber={(no) => {
          // page number conversions goes here (eg : to roman number)
          return String(no);
        }}
        pageHeaderAlignment="outside"
        pageNumberAlignment="center"
        pageNumberPosition="top"
        paddingBottom={65}
        paddingTop={65}
        marginInside={80}
        marginOutside={20}
      >
        <View style={{ minHeight: '20vh', justifyContent: 'center' }}>
          <TextNode fontSize={20}>Chapter 1</TextNode>
          <TextNode fontSize={50}>Cool Chapter</TextNode>
          <TextNode fontSize={20}>
            Page Number:outside | Header Text:outside
          </TextNode>
        </View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
      </Chapter>

      <Chapter
        paddingBottom={65}
        paddingTop={65}
        evenPageHeaderText="Author"
        oddPageHeaderText="Chapter"
        getTransformedPageNumber={(no) => String(no)}
        pageHeaderAlignment="center"
        pageNumberAlignment="center"
        pageNumberPosition="top"
        marginInside={40}
        marginOutside={20}
        backgroundImageSrc="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg"
      >
        <View style={{ minHeight: '20vh', justifyContent: 'center' }}>
          <TextNode fontSize={20}>Chapter 2</TextNode>
          <TextNode fontSize={50}>Cool Chapter</TextNode>
          <TextNode fontSize={20}>
            Page number-center | Header text - center
          </TextNode>
        </View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
      </Chapter>

      <Chapter
        paddingBottom={65}
        paddingTop={65}
        evenPageHeaderText="Author"
        oddPageHeaderText="Chapter"
        getTransformedPageNumber={(no) => String(no)}
        pageHeaderAlignment="center"
        pageNumberAlignment="center"
        pageNumberPosition="bottom"
        marginInside={40}
        marginOutside={20}
        backgroundImageSrc="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg"
      >
        <View style={{ minHeight: '20vh', justifyContent: 'center' }}>
          <TextNode fontSize={20}>Chapter 3</TextNode>
          <TextNode fontSize={50}>Cool Chapter</TextNode>
          <TextNode fontSize={20}>
            Page number-center | Header text - center
          </TextNode>
        </View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
      </Chapter>

      <Chapter
        paddingBottom={65}
        paddingTop={65}
        evenPageHeaderText="Author"
        oddPageHeaderText="Chapter"
        getTransformedPageNumber={(no) => String(no)}
        pageHeaderAlignment="outside"
        pageNumberAlignment="center"
        pageNumberPosition="bottom"
        marginInside={40}
        marginOutside={20}
      >
        <View style={{ minHeight: '20vh', justifyContent: 'center' }}>
          <TextNode fontSize={20}>Chapter 4</TextNode>
          <TextNode fontSize={50}>Cool Chapter</TextNode>
          <TextNode fontSize={20}>
            Page number-bottom-center | Header text - outside
          </TextNode>
        </View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
      </Chapter>
      {/* no header text */}
      <Chapter
        paddingBottom={65}
        paddingTop={65}
        getTransformedPageNumber={(no) => {
          return String(no);
        }}
        pageNumberAlignment="outside"
        pageNumberPosition="bottom"
        marginInside={80}
        marginOutside={20}
      >
        <View style={{ minHeight: '20vh', justifyContent: 'center' }}>
          <TextNode fontSize={20}>Chapter 1</TextNode>
          <TextNode fontSize={50}>Cool Chapter</TextNode>
          <TextNode fontSize={20}>
            Page Number:outside | Header Text:none
          </TextNode>
        </View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga, similique aliquid tenetur excepturi eligendi est cum? Voluptatum
          iste ratione sapiente repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam neque nisi mollitia doloremque,
          necessitatibus soluta, explicabo non fuga, similique aliquid tenetur
          excepturi eligendi est cum? Voluptatum iste ratione sapiente repellat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque nisi mollitia doloremque, necessitatibus soluta, explicabo non
          fuga,
        </Text>
      </Chapter>
    </>
  );
};

export default ChapterPreview;
