import { View as RPDFView } from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyles } from '@paladin-analytics/rpdf-types';
import { FC } from 'react';

interface FootnotePlaceholderProps {
  style?: RPDFStyles;
  marginTop: number;
}

export const FootnotePlaceholder: FC<FootnotePlaceholderProps> = ({
  marginTop,
  style,
}) => (
  <RPDFView
    fixed
    style={{
      position: 'absolute',
      top: '100%',
      width: '100%',
      fontSize: style?.fontSize,
      fontFamily: style?.fontFamily,
      marginTop,
    }}
    renderFootnotes
  />
);
