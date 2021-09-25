import { render } from '@testing-library/react';

import ReactPdfComponents from './ReactPdfComponents';

describe('ReactPdfComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactPdfComponents />);
    expect(baseElement).toBeTruthy();
  });
});
