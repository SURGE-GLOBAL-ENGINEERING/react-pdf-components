import {
  Chapter,
  ChapterProps,
  List,
  ListItem,
  TextNode,
} from '@paladin-analytics/react-pdf-components';
import { Text, View } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
import { getLayoutChapterProperties } from '../chapter-preview/layout-chapter-properties';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ChapterPreview {}

const ListOrphanPreview: FC<ChapterPreview> = () => {
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
      fontSize: '8pt',
    },
    footerStyles: {
      fontFamily: 'Cardo',
      fontSize: 8,
    },
    headerHiddenPages: [1],
    footerHiddenPages: [1],
  };
  return (
    <Chapter
      paddingBottom={'30px'}
      paddingTop={30}
      marginInside={80}
      marginOutside={30}
      footerStyles={{ fontSize: '8pt' }}
      headerStyles={{ fontSize: '12pt' }}
      backgroundImageSrc="https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4="
      {...props}
      pageNumberPosition="bottom"
      style={{ fontSize: 12 }}
    >
      <View style={{ minHeight: '40vh', justifyContent: 'center' }}>
        <TextNode fontSize={20}>Chapter 1</TextNode>
        <TextNode fontSize={50}>Down the Rabbit-Hole</TextNode>
        <TextNode fontSize={20}>
          Page Number:outside | Header Text:outside
        </TextNode>
      </View>
      <Text style={{ textAlign: 'justify' }}>
        Alicewasbeginningtogetverytiredfsitting by her sist and conversations of
        having nothing to do: once or twice she had peeped into the book her
        sister was reading, but it had no pictures or conversations in it, “and
        what is the use of a book,” thought Alice “without pictures or
        conversations?” So she was considering in her own mind (as well as she
        could, for the hot day made her feel very sleepy and stupid), whether
        the pleasure of making a daisy-chain would be worth the trouble of
        getting up and picking the daisies when suddenly a White Rabbit with
        pink eyes ran close by her. Alicewasbeginningtogetverytiredfsitting by
        her sist and conversations of having nothing to do: once or twice she
        had peeped into the book her sister was reading, but it had no pictures
        or conversations in it, “and what is the use of a book,” thought Alice
        “without pictures or conversations?” So she was considering in her own
        mind (as well as she could, for the hot day made her feel very sleepy
        and stupid), whether the pleasure of making a daisy-chain would be worth
        the trouble of getting up and picking the daisies when suddenly a White
        Rabbit with pink eyes ran close by her.whether the pleasure of making a
        daisy-chain would be worth the trouble of getting up and picking the
        daisies when suddenly a White Rabbit with pink eyes ran close by
        her.pink eyes ran close by herpink eyes ran close by her pink eyes ran
        close by her pink eyes ran close by her pink eyes ran close by her pink
        eyes ran close fdf.
      </Text>
      <List type="ol">
        <ListItem>
          <Text>I rewind the video and hit play again.</Text>
        </ListItem>
        <ListItem>
          <Text>And again. </Text>
        </ListItem>
        <ListItem>
          <Text>
            I’ve watched it more than a dozen times already. Watched as DVDs ky
            across the room and s-ip across the carpet. Watched as chairs scrape
            against hardwood koorsbbcontrolled uy some fnseen Torce. Watched the
            fltimate signs oT a Tamily Talling apart and ta-ing it oft on each
            other.{' '}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Anger is an emotion that slowly ufilds as a person is givb en one
            negative aTter another. It’s li-e watching a pressfre coo-er with
            the lid clamped down or Tar too long. I can sympathize with the pain
            they Teel over losing qodd and the fnanswered Efestions sfrrofnding
            his disappearancebband presfmed death. Lspecially since it happened
            in my own home. oss has a way oT ripping the heart oft oT yof and
            leaving yof uleeding uy the roadside.{' '}
          </Text>
        </ListItem>
        <ListItem>
          <Text>We still don’t have any answers.</Text>
        </ListItem>
        <ListItem>
          <Text>
            The door opens and the light auove me kic-ers on.jI sEfint as my
            eyes ad“fst to the sfdden urightness arofnd me.{' '}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Y,of’ve ueen hiding oft in here since I got here”J Oonah says”
            leaning over the edge oT my des-.{' '}
          </Text>
        </ListItem>
      </List>
    </Chapter>
  );
};

export default ListOrphanPreview;
