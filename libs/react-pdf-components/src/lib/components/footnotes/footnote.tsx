import { Text as RPDFText } from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyles } from '@paladin-analytics/rpdf-types';
import { FC } from 'react';
import { Item } from '../list-item';

interface FootnoteProps {
  reference: string;
  note: string;
  style?: RPDFStyles;
}

export const Footnote: FC<FootnoteProps> = ({ reference, note, style }) => {
  return (
    <RPDFText
      footnote={() => (
        <Item prefix={`${reference}.`} style={style}>
          <RPDFText style={style} orphans={0}>
            {note}
          </RPDFText>
        </Item>
      )}
      style={{ ...style, fontVariant: 'superscript' }}
    >
      {reference}{' '}
    </RPDFText>
  );
};
