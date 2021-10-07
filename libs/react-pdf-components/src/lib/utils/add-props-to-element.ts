import { ReactElement, isValidElement, cloneElement } from 'react';

export const addPropsToReactElement = (element: ReactElement, props: any) => {
  if (!isValidElement(element)) {
    throw new Error('Invalid react element found in the tree');
  }
  return cloneElement(element, props);
};
