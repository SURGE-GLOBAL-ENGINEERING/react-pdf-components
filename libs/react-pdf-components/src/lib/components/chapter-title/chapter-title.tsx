import { StyleSheet } from '@paladin-analytics/rpdf-renderer';
import { toWords as numbersToWord } from 'number-to-words';
import { FC } from 'react';
import { Image, TextNode, View } from '../../components';
import {
  ExtraProps as ExtraStyleProps,
  PrebuildThemeProperties,
} from './prebuild-theme-properties';
import {
  Chapter,
  CustomImages,
  CustomThemeHeader,
  ThemeBase,
  ThemeConfig,
} from './types';

interface TextStylesProperties {
  font: string;
  size: number;
  align: 'left' | 'center' | 'right';
  width: number;
}

const isPrebuildTheme = (
  themeId: string,
  preBuildThemeProperties: PrebuildThemeProperties
) => {
  return Object.keys(preBuildThemeProperties).includes(themeId);
};

const getChapterNumber = (type: string, chapterNumber?: number) => {
  if (!chapterNumber) return null;
  switch (type) {
    case 'number':
      return `${chapterNumber}`;
    case 'chapter+number':
      return `Chapter ${chapterNumber}`;
    case 'word':
      return `${numbersToWord(chapterNumber)}`;
    case 'chapter+word':
      return `Chapter ${numbersToWord(chapterNumber)}`;
    default:
      return null;
  }
};

const getAlignSelf = (
  align?: 'left' | 'center' | 'right'
): 'center' | 'auto' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch' => {
  switch (align) {
    case 'center':
      return 'center';
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'auto';
  }
};

const getTextExtraStyles = (
  themeId: string,
  selector: keyof CustomThemeHeader,
  preBuildThemeProperties: PrebuildThemeProperties
) => {
  if (!isPrebuildTheme(themeId, preBuildThemeProperties)) return {};
  if (!preBuildThemeProperties[themeId]?.extra) return {};
  if (
    !Object.keys(preBuildThemeProperties[themeId]?.extra || {}).includes(
      selector
    )
  )
    return {};

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const styleProps = (preBuildThemeProperties[themeId]?.extra || {})[
    selector
  ] as ExtraStyleProps;

  const style = StyleSheet.create({
    text: {
      ...styleProps,
    },
  });

  return style.text;
};

const getTextStylesFromProperties = (
  selector: keyof CustomThemeHeader,
  baseFontSize: number,
  properties?: CustomThemeHeader | null
) => {
  if (!properties) return {};
  const { align, font, size, width } = properties[
    selector
  ] as TextStylesProperties;
  let fontSize: number | undefined = undefined;

  switch (selector) {
    case 'chapterNo':
      fontSize = ((2 + size) / 3) * baseFontSize;
      break;
    case 'chapterTitle':
      fontSize = ((4 + size) / 3) * baseFontSize;
      break;
    case 'chapterSubtitle':
      fontSize = ((3 + size) / 3) * baseFontSize;
      break;
  }

  const styles = StyleSheet.create({
    text: {
      textAlign: align,
      fontFamily: font,
      fontSize,
      lineHeight: 1 + size / 10,
      width: `${width}%`,
      alignSelf: getAlignSelf(align),
    },
  });
  return styles.text;
};

const getDefaultStyles = (baseFontSize: number) => {
  return StyleSheet.create({
    container: {
      minHeight: baseFontSize * 13,
      paddingTop: baseFontSize * 1,
      paddingBottom: baseFontSize * 1,
      display: 'flex',
      justifyContent: 'center',
    },
    chapterTitle: {
      fontSize: baseFontSize * 2,
      textAlign: 'left',
      lineHeight: 1.2,
      width: '100%',
      paddingTop: baseFontSize * 0.4,
      paddingBottom: baseFontSize * 0.4,
    },
    chapterSubTitle: {
      fontSize: baseFontSize * 1.6666666666666667,
      textAlign: 'left',
      lineHeight: 1.2,
      width: '100%',
    },
    chapterNumber: {
      fontSize: baseFontSize * 1.3333333333333333,
      textAlign: 'left',
      lineHeight: 1.2,
      width: '100%',
      paddingBottom: baseFontSize * 0.6,
    },
    titleImageContainer: {
      paddingTop: baseFontSize * 0.3,
    },
  });
};

export interface ChapterTitleProps {
  chapter: Chapter;
  themeConfig: ThemeConfig;
  styles: ThemeBase | null;
  preBuildThemeProperties: PrebuildThemeProperties;
  chapterNumber?: number;
  images?: CustomImages;
  customThemeHeaders?: CustomThemeHeader | null;
  isThemeEditing?: boolean;
}

export const ChapterTitle: FC<ChapterTitleProps> = ({
  chapter,
  themeConfig,
  styles,
  preBuildThemeProperties,
  chapterNumber,
  images,
  customThemeHeaders,
  isThemeEditing,
}) => {
  const { title, subtitle } = chapter;
  const { chapterNumbering, titleCard, baseFontSize, themeId, titleAlignment } =
    themeConfig;
  const {
    chapterNumber: ischapterNumberVisible,
    title: isTitleVisible,
    subtitle: isSubtitleVicible,
    image: isTitleImageVisible,
  } = titleCard;
  const defaultChapterStyles = getDefaultStyles(baseFontSize);

  const getStyleProperties = () => {
    if (isThemeEditing) return customThemeHeaders;
    if (isPrebuildTheme(themeId, preBuildThemeProperties))
      return preBuildThemeProperties[themeId] as CustomThemeHeader;
    return styles?.properties;
  };

  const getImagePlacement = () => {
    if (isThemeEditing) return customThemeHeaders?.image.placement;
    if (isPrebuildTheme(themeId, preBuildThemeProperties)) {
      return preBuildThemeProperties[themeId].image?.placement;
    }
    return styles?.properties?.image.placement;
  };

  const getTitleAlignment = () => {
    if (isPrebuildTheme(themeId, preBuildThemeProperties))
      return titleAlignment;
    return undefined;
  };

  const getImage = () => {
    if (isThemeEditing) {
      if (customThemeHeaders?.layout === 'no-image') return null;
      const image = customThemeHeaders?.image;
      if (!image) return null;
      if (customThemeHeaders?.individualChapterImage) {
        return { ...image, url: images?.url };
      }
      return image;
    }
    if (styles?.properties?.layout === 'no-image') return null;
    if (isPrebuildTheme(themeId, preBuildThemeProperties)) {
      if (preBuildThemeProperties[themeId]?.layout === 'no-image') return null;
      return preBuildThemeProperties[themeId].image;
    }
    return images;
  };

  const ChapterImage = () => {
    if (!isTitleImageVisible && !isThemeEditing) return null;
    const _images = getImage();
    if (
      !_images ||
      (_images && _images.background) ||
      (_images && !_images.url)
    )
      return null;
    // eslint-disable-next-line no-unused-vars
    const { colored, url, alignment, width } = _images;
    const imageAlignment = getTitleAlignment()
      ? getTitleAlignment()
      : alignment;
    // TODO: Implement colored or grayscale image
    return (
      <View style={defaultChapterStyles.titleImageContainer}>
        <Image src={url} alignment={imageAlignment as any} width={width} />
      </View>
    );
  };

  return (
    <View style={defaultChapterStyles.container}>
      {getImagePlacement() === 'above-chapter-no' && <ChapterImage />}
      {(ischapterNumberVisible || isThemeEditing) && (
        <TextNode
          style={[
            defaultChapterStyles.chapterNumber,
            getTextStylesFromProperties(
              'chapterNo',
              baseFontSize,
              getStyleProperties()
            ),
            getTextExtraStyles(themeId, 'chapterNo', preBuildThemeProperties),
            { textAlign: getTitleAlignment() },
          ]}
        >
          {getChapterNumber(chapterNumbering, chapterNumber) || 'Chapter'}
        </TextNode>
      )}
      {getImagePlacement() === 'above-chapter-title' && <ChapterImage />}
      {(isTitleVisible || isThemeEditing) && (
        <TextNode
          style={[
            defaultChapterStyles.chapterTitle,
            getTextStylesFromProperties(
              'chapterTitle',
              baseFontSize,
              getStyleProperties()
            ),
            getTextExtraStyles(
              themeId,
              'chapterTitle',
              preBuildThemeProperties
            ),
            { textAlign: getTitleAlignment() },
          ]}
        >
          {title || 'Title'}
        </TextNode>
      )}
      {getImagePlacement() === 'below-chapter-title' && <ChapterImage />}
      {(isSubtitleVicible || isThemeEditing) && (
        <TextNode
          style={[
            defaultChapterStyles.chapterSubTitle,
            getTextStylesFromProperties(
              'chapterSubtitle',
              baseFontSize,
              getStyleProperties()
            ),
            getTextExtraStyles(
              themeId,
              'chapterSubtitle',
              preBuildThemeProperties
            ),
            { textAlign: getTitleAlignment() },
          ]}
        >
          {subtitle || 'Subtitle'}
        </TextNode>
      )}
      {getImagePlacement() === 'below-subtitle' && <ChapterImage />}
    </View>
  );
};
