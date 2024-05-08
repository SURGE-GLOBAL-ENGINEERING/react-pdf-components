import {
    Image as RPDFImage,
    Text as RPDFText,
    View as RPDFView,
    StyleSheet,
} from '@surge-global-engineering/rpdf-renderer';
import { Style as RPDFStyles } from '@surge-global-engineering/rpdf-types';
import {
    FC,
    ReactElement,
    createElement,
    isValidElement,
    useContext,
} from 'react';
import { arabToRoman } from 'roman-numbers';
import { addPropsToReactElement } from '../../utils';
import { LevelContext, ListProps, StyleContext, TypeContext } from '../list';
import { TextNode, TextNodeProps } from '../text-node';
import { arabToAlphabetic } from './alphabetic';

const bulletCandidatesImageDataUrls = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJVJREFUSInt0r0NwjAQQOEvMAk9CVtAzRpp2YBF+BmBBsEEVBSIHRAlCxCKpExkWxRp/KrT2c93ujOZTCYzPkXC3QrLLr7iESNNIx/fYI0zXqgxwy2hwUEWOPTkjyhD8iSiwAq7nvy+O/u7wFf/rgo0EX6QyvCI5iE5Zslv7UJrfLp4iztOITnlm5bamTe44JngZkbkBz74FFKIvkIXAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAI5JREFUSInt0rENwjAQheEPKFkAmIGELWAhxDysQAljEGp6JGpKQhHTICLHSqQ0/qWTrLPfvbuTyWQymfGZJLwtsQ3nC65DNnJAhWeICvuhim9CwfonKhQx8bSDwQ7LP/lFuOtt8G7JfyfpTal9ReuYeNbB4IE5VpqJX7jjiFNMnPJNC83Oa5xxS9BmRuQDI28dXM/cSMwAAAAASUVORK5CYII=',
];

const numberingFormatters = [
  (i: number) => i,
  (i: number) => arabToAlphabetic(i - 1),
  (i: number) => arabToRoman(i).toLowerCase(),
];

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  elementContainer: {
    flex: 1,
  },
  prefixContainer: {
    alignItems: 'flex-end',
  },
});

const getFontSize = (fontSize?: string | number): number => {
  const DEFAULT_FONT_SIZE = 11;
  if (!fontSize) return DEFAULT_FONT_SIZE;

  if (typeof fontSize === 'string') {
    const match = fontSize.match(/\d+/);
    return match ? +match[0] : DEFAULT_FONT_SIZE;
  }

  return fontSize;
};

export const Item: FC<{
  prefix: string | ReactElement;
  style?: RPDFStyles;
  children: ReactElement;
  wrap?: boolean;
}> = ({ prefix, style, children, wrap = true }) => {
  /**
   * if the child is a text node, we should override the default orphans value to 0
   * to prevent the line breaking of text node which causes the prefix and the content
   * to render in different lines
   */
  if (children.type === TextNode) {
    children = addPropsToReactElement(children, { orphans: 0 });
  }

  return (
    <RPDFView
      wrap={wrap}
      style={{
        ...styles.itemContainer,
        marginBottom: getFontSize(style?.fontSize),
      }}
    >
      <RPDFView
        style={{
          ...styles.prefixContainer,
          width: getFontSize(style?.fontSize) * 2, // TODO: Introduce font based fine tuning
        }}
      >
        <RPDFText
          style={{
            fontFamily: style?.fontFamily,
            fontSize: style?.fontSize,
            lineHeight: style?.lineHeight,
          }}
        >
          {prefix}{' '}
        </RPDFText>
        {/**
         * The following view is introduced as a fix to ATT-344.
         * (When the text portion of a list item goes beyond the page an onto the next page, the alignment is off.)
         */}
        <RPDFView
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 1,
            width: 1,
          }}
        ></RPDFView>
      </RPDFView>
      <RPDFText
        style={{
          ...styles.elementContainer,
          marginTop: -0.01,
          width: `calc(100% - ${getFontSize(style?.fontSize) * 2})`,
        }}
        orphans={0}
        widows={0}
      >
        {children}
      </RPDFText>
    </RPDFView>
  );
};

const addListItemPrefix = (
  element: ReactElement,
  level: number,
  type: 'ol' | 'ul',
  index?: number,
  style?: RPDFStyles
) => {
  if (!isValidElement(element)) {
    throw new Error('Invalid react element found in the tree');
  }

  if (type === 'ol' && index) {
    const levelFormatter = (level - 1) % numberingFormatters.length;
    const formattedIndex = numberingFormatters[levelFormatter](index);

    return (
      <Item
        prefix={`${formattedIndex}.`}
        style={{
          fontFamily: style?.fontFamily,
          fontSize: style?.fontSize,
          lineHeight: style?.lineHeight,
        }}
      >
        {element}
      </Item>
    );
  }

  const candidateIndex = level % bulletCandidatesImageDataUrls.length;

  return (
    <Item
      prefix={<RPDFImage src={bulletCandidatesImageDataUrls[candidateIndex]} />}
      style={{
        fontFamily: style?.fontFamily,
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
      }}
    >
      {element}
    </Item>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withListItemPrefix = (
  children: any,
  level: number,
  type: 'ol' | 'ul',
  index?: number,
  style?: RPDFStyles
) => {
  if (!Array.isArray(children)) {
    return [addListItemPrefix(children, level, type, index, style)];
  }

  return [
    addListItemPrefix(children[0], level, type, index, style),
    ...children.slice(1),
  ];
};

export interface ListItemProps {
  children?:
    | ReactElement<TextNodeProps>
    | [ReactElement<TextNodeProps>, ReactElement<ListProps>];

  // index should be available if the list is ordered
  index?: number;
  style?: RPDFStyles;
}

export const ListItem: FC<ListItemProps> = ({ children, index, style }) => {
  const level = useContext(LevelContext);
  const type = useContext(TypeContext);
  const parentStyle = useContext(StyleContext);

  return createElement(
    RPDFView,
    {},
    ...withListItemPrefix(children, level, type, index, {
      ...parentStyle,
      ...style,
    })
  );
};
