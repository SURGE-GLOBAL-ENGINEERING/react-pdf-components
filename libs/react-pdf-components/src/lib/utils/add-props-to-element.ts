import { cloneElement, isValidElement, ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addPropsToReactElement = (element: ReactElement, props: any) => {
  if (!isValidElement(element)) {
    throw new Error('Invalid react element found in the tree');
  }
  return cloneElement(element, props);
};
