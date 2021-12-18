import {
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyles } from '@paladin-analytics/rpdf-types';
import { FC, ReactElement, useContext } from 'react';
import { LevelContext, ListProps, TypeContext } from '../list';
import { TextNodeProps } from '../text-node';

const bulletCandidates = ['•'];
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

  const itemSymbol =
    type === 'ol'
      ? `${index || '1'}.`
      : `${bulletCandidates[level % bulletCandidates.length]}`;

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
