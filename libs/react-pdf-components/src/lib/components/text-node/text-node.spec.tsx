import { render } from '@testing-library/react';

import { TextNode } from './text-node';

describe('TextNode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextNode />);
    expect(baseElement).toBeTruthy();
  });
});
