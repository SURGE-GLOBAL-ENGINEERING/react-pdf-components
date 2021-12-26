import {
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyles } from '@paladin-analytics/rpdf-types';
import { FC, ReactElement, useContext } from 'react';
import { LevelContext, ListProps, TypeContext } from '../list';
import { TextNodeProps } from '../text-node';
import { convertToAlphabetic, convertToRoman } from './number-converters';

const bulletCandidates = ['•', '◦', '▪'];
// eslint-disable-next-line no-unused-vars
const orderedSymbolGenerators: ((no: number) => string)[] = [
  (number) => String(number),
  convertToAlphabetic,
  convertToRoman,
];
export interface ListItemProps {
  children?:
    | ReactElement<TextNodeProps>
    | [ReactElement<TextNodeProps>, ReactElement<ListProps>];

  // index should be available if the list is ordered
  index?: number;
  // count must be available if the list is ordered
  count?: number;
  style?: RPDFStyles;
}

export const ListItem: FC<ListItemProps> = ({
  children,
  index,
  count,
  style,
}) => {
  const level = useContext(LevelContext);
  const type = useContext(TypeContext);
  const symbolIndex = (level - 1) % bulletCandidates.length;
  const itemSymbol =
    type === 'ol'
      ? `${orderedSymbolGenerators[symbolIndex](index || 1)}.`
      : `${bulletCandidates[symbolIndex]}`;

  const itemSymbolStyle: RPDFStyles = {
    fontSize: style?.fontSize,
  };

  const baseWidth =
    0.5 *
    (style?.fontSize && typeof style?.fontSize === 'number'
      ? style?.fontSize
      : 20);

  const digits = 1 + Math.ceil(Math.log10(count || 1));
  const itemSymbolMinWidth = baseWidth * digits;

  if (type === 'ol') {
    itemSymbolStyle.fontFamily = style?.fontFamily;
  } else {
    itemSymbolStyle.fontFamily = 'Inter';
  }

  const item = (
    <RPDFView style={{ flexDirection: 'row' }}>
      <RPDFView
        style={{
          width: style?.fontSize,
          minWidth: itemSymbolMinWidth,
          textAlign: 'right',
          alignContent: 'center',
          alignItems: 'flex-end',
          marginRight: 4,
        }}
      >
        <RPDFText style={itemSymbolStyle}>{itemSymbol}</RPDFText>
      </RPDFView>
      <RPDFView>{children}</RPDFView>
    </RPDFView>
  );

  return item;
};
