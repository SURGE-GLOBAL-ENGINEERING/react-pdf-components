import { View as RPDFView } from '@surge-global-engineering/rpdf-renderer';
import { FunctionComponent } from 'react';

/**
 * Clears any vertical space remaining from a previously floated component
 */
export const ClearFloat: FunctionComponent = () => {
  return <RPDFView fillPreviousWrapTextSpacing />;
};

export default ClearFloat;
