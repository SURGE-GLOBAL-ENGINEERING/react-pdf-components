import { render } from '@testing-library/react';
import ClearFloat from './clear-float';

describe('ClearFloat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClearFloat />);
    expect(baseElement).toBeTruthy();
  });
});
