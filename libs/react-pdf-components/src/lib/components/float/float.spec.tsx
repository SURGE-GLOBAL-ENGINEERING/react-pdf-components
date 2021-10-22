import { render } from '@testing-library/react';
import Float from './float';

describe('Float', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Float direction="left" />);
    expect(baseElement).toBeTruthy();
  });
});
