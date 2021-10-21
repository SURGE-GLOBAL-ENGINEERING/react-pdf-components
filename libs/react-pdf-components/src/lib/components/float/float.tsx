import { View as RPDFView } from '@paladin-analytics/rpdf-renderer';
import { FunctionComponent } from 'react';
import { ClearFloat } from './clear-float';

export interface FloatProps {
  direction: 'left' | 'right';
}

/**
 * Floats the children to a direction, causing text blocks that appear after the float
 * to wrap around the floated children
 */
export const Float: FunctionComponent<FloatProps> = ({
  direction,
  children,
}) => {
  return (
    <>
      <ClearFloat />
      <RPDFView hasWrapTextAroundComponent>
        <RPDFView
          style={{
            position: 'absolute',
            width: '100%',
            alignItems: direction === 'right' ? 'flex-end' : 'flex-start',
          }}
        >
          <RPDFView wrapTextAround>{children}</RPDFView>
        </RPDFView>
      </RPDFView>
    </>
  );
};

export default Float;
