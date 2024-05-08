import { View as RPDFView } from '@surge-global-engineering/rpdf-renderer';
import { Style as RPDFStyles } from '@surge-global-engineering/rpdf-types';
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
      fontSize: style?.fontSize || 0,
      fontFamily: style?.fontFamily,
      marginTop,
    }}
    renderFootnotes
  />
);
