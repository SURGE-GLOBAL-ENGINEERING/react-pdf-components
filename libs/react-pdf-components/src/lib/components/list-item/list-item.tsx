import {
  Image as RPDFImage,
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyles } from '@paladin-analytics/rpdf-types';
import {
  createElement,
  FC,
  isValidElement,
  ReactElement,
  useContext,
} from 'react';
import { LevelContext, ListProps, StyleContext, TypeContext } from '../list';
import { TextNodeProps } from '../text-node';

const bulletCandidatesImageDataUrl = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJVJREFUSInt0r0NwjAQQOEvMAk9CVtAzRpp2YBF+BmBBsEEVBSIHRAlCxCKpExkWxRp/KrT2c93ujOZTCYzPkXC3QrLLr7iESNNIx/fYI0zXqgxwy2hwUEWOPTkjyhD8iSiwAq7nvy+O/u7wFf/rgo0EX6QyvCI5iE5Zslv7UJrfLp4iztOITnlm5bamTe44JngZkbkBz74FFKIvkIXAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAI5JREFUSInt0rENwjAQheEPKFkAmIGELWAhxDysQAljEGp6JGpKQhHTICLHSqQ0/qWTrLPfvbuTyWQymfGZJLwtsQ3nC65DNnJAhWeICvuhim9CwfonKhQx8bSDwQ7LP/lFuOtt8G7JfyfpTal9ReuYeNbB4IE5VpqJX7jjiFNMnPJNC83Oa5xxS9BmRuQDI28dXM/cSMwAAAAASUVORK5CYII=',
];

export const addListItemPrefix = (
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
    return (
      <RPDFText>
        <RPDFText
          style={{
            fontFamily: style?.fontFamily,
            fontSize: style?.fontSize,
          }}
        >
          {index}.{' '}
        </RPDFText>
        {element}
      </RPDFText>
    );
  }

  const candidateIndex = level % bulletCandidatesImageDataUrl.length;

  return (
    <RPDFText>
      <RPDFText
        style={{
          fontSize: style?.fontSize,
          width: style?.fontSize,
        }}
      >
        <RPDFImage src={bulletCandidatesImageDataUrl[candidateIndex]} />
        {'  '}
      </RPDFText>
      {element}
    </RPDFText>
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
