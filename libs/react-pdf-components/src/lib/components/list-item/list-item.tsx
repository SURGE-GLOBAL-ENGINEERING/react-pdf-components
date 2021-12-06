import {
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
import { LevelContext, ListProps, TypeContext } from '../list';
import { TextNodeProps } from '../text-node';

const bulletCandidates = ['•'];

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
          {index < 10 ? '\t' : ''}
          {index}.{' '}
        </RPDFText>
        {element}
      </RPDFText>
    );
  }

  const candidateIndex = level % bulletCandidates.length;

  return (
    <RPDFText>
      <RPDFText
        style={{
          ...{ fontSize: style?.fontSize },
          ...{ fontFamily: 'Courier' },
        }}
      >
        {bulletCandidates[candidateIndex]}
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

  return createElement(
    RPDFView,
    {},
    ...withListItemPrefix(children, level, type, index, style)
  );
};
