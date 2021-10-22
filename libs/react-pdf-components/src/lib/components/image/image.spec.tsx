import { render } from '@testing-library/react';

import { Image } from './image';

describe('Image', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Image
        src={
          'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg'
        }
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
