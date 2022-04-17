import { render } from '@testing-library/react';
import Header from '.';

test('header logo image loads', async () => {
  const { getByAltText } = await render(<Header />);
  const logoImage = getByAltText('Deco Choice');
  expect(logoImage).toHaveAttribute('src', 'logo.png')
});
