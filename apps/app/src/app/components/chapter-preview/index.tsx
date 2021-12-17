import {
  Chapter,
  ChapterProps,
  TextNode,
} from '@paladin-analytics/react-pdf-components';
import { Text, View } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
import { getLayoutChapterProperties } from './layout-chapter-properties';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ChapterPreview {}

const ChapterPreview: FC<ChapterPreview> = () => {
  const props: ChapterProps = {
    // pageNumberAlignment: 'outside',
    // pageNumberPosition: 'top',
    // evenPageHeaderText: 'Hyphens Test',
    // oddPageHeaderText: 'Down the Rabbit-Hole',
    // pageHeaderAlignment: 'center',
    ...getLayoutChapterProperties(
      'layout1',
      'Author',
      'Hyphens Test',
      'Down the Rabbit-Hole'
    ),
    getTransformedPageNumber: (no) => {
      // page number conversions goes here (eg : to roman number)
      return String(no);
    },
    headerStyles: {
      fontFamily: 'Cardo',
      fontSize: '12pt',
    },
    footerStyles: {
      fontFamily: 'Cardo',
      fontSize: '12pt',
    },
    headerHiddenPages: [1],
    footerHiddenPages: [1],
  };
  return (
    <>
      <Chapter
        paddingBottom={'30px'}
        paddingTop={30}
        marginInside={80}
        marginOutside={30}
        footerStyles={{ fontSize: '14pt' }}
        headerStyles={{ fontSize: '12pt' }}
        backgroundImageSrc="https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4="
        {...props}
        pageNumberPosition="top"
      >
        <View style={{ minHeight: '20vh', justifyContent: 'center' }}>
          <TextNode fontSize={20}>Chapter 1</TextNode>
          <TextNode fontSize={50}>Down the Rabbit-Hole</TextNode>
          <TextNode fontSize={20}>
            Page Number:outside | Header Text:outside
          </TextNode>
        </View>
        <Text style={{ textAlign: 'justify' }}>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text style={{ textAlign: 'justify' }}>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text style={{ textAlign: 'justify' }}>
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down, so suddenly that Alice had not a moment to think
          about stopping herself before she found herself falling down a very
          deep well. Either the well was very deep, or she fell very slowly, for
          she had plenty of time as she went down to look about her and to
          wonder what was going to happen next. First, she tried to look down
          and make out what she was coming to, but it was too dark to see
          anything; then she looked at the sides of the well, and noticed that
          they were filled with cupboards and book-shelves; here and there she
          saw maps and pictures hung upon pegs. She took down a jar from one of
          the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to
          her great disappointment it was empty: she did not like to drop the
          jar for fear of killing somebody underneath, so managed to put it into
          one of the cupboards as she fell past it.
        </Text>
        <Text style={{ textAlign: 'justify' }}>
          “Well!” thought Alice to herself, “after such a fall as this, I shall
          think nothing of tumbling down stairs! How brave they’ll all think me
          at home! Why, I wouldn’t say anything about it, even if I fell off the
          top of the house!” (Which was very likely true.)
        </Text>
        <Text style={{ textAlign: 'justify' }}>
          Down, down, down. Would the fall never come to an end? “I wonder how
          many miles I’ve fallen by this time?” she said aloud. “I must be
          getting somewhere near the centre of the earth. Let me see: that would
          be four thousand miles down, I think—” (for, you see, Alice had learnt
          several things of this sort in her lessons in the schoolroom, and
          though this was not a very good opportunity for showing off her
          knowledge, as there was no one to listen to her, still it was good
          practice to say it over) “—yes, that’s about the right distance—but
          then I wonder what Latitude or Longitude I’ve got to?” (Alice had no
          idea what Latitude was, or Longitude either, but thought they were
          nice grand words to say.)
        </Text>
        <Text style={{ textAlign: 'justify' }}>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text style={{ textAlign: 'justify' }}>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
        </Text>
        <Text>
          Alicewasbeginningtogetverytiredfsitting by her sist and conversations
          of having nothing to do: once or twice she had peeped into the book
          her sister was reading, but it had no pictures or conversations in it,
          “and what is the use of a book,” thought Alice “without pictures or
          conversations?” So she was considering in her own mind (as well as she
          could, for the hot day made her feel very sleepy and stupid), whether
          the pleasure of making a daisy-chain would be worth the trouble of
          getting up and picking the daisies when suddenly a White Rabbit with
          pink eyes ran close by her.
        </Text>

        <Text>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge. In another moment down went
          Alice after it, never once considering how in the world she was to get
          out again.
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
        headerHiddenPages={[1]}
        backgroundImageSrc="https://thumbs.dreamstime.com/b/fondo-cl%C3%A1sico-beige-del-papel-pintado-del-estampado-de-plores-66866744.jpg"
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
