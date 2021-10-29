import {
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import {
  createElement,
  FC,
  isValidElement,
  ReactElement,
  useContext,
} from 'react';
import { LevelContext, ListProps, TypeContext } from '../list';
import { TextNodeProps } from '../text-node';

const bulletCandidates = ['•', '‣', '⦾', '⦿'];

export const addListItemPrefix = (
  element: ReactElement,
  level: number,
  type: 'ol' | 'ul',
  index?: number,
  fontSize?: number
) => {
  if (!isValidElement(element)) {
    throw new Error('Invalid react element found in the tree');
  }

  if (type === 'ol' && index) {
    console.log('siez', fontSize);
    return createElement(
      RPDFText,
      {
        style: { marginLeft: index < 10 ? '10px' : '', fontSize: fontSize },
      },
      `${index}. `,
      element
    );
  }

  const candidateIndex = level % bulletCandidates.length;
  return createElement(
    RPDFText,
    { style: { fontSize: fontSize } },
    `${bulletCandidates[candidateIndex]} `,
    element
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withListItemPrefix = (
  children: any,
  level: number,
  type: 'ol' | 'ul',
  index?: number,
  fontSize?: number
) => {
  if (!Array.isArray(children)) {
    return addListItemPrefix(children, level, type, index, fontSize);
  }

  return [
    addListItemPrefix(children[0], level, type, index, fontSize),
    ...children.slice(1),
  ];
};

export interface ListItemProps {
  children?:
    | ReactElement<TextNodeProps>
    | [ReactElement<TextNodeProps>, ReactElement<ListProps>];

  // index should be available if the list is ordered
  index?: number;
  fontSize?: number;
}

export const ListItem: FC<ListItemProps> = ({ children, index, fontSize }) => {
  const level = useContext(LevelContext);
  const type = useContext(TypeContext);

  return (
    <RPDFView>
      {withListItemPrefix(children, level, type, index, fontSize)}
    </RPDFView>
  );
};
