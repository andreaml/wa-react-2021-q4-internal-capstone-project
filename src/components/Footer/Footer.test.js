import { render } from '@testing-library/react';
import Footer from '.';

test('footer logo image loads', async () => {
  const { getByAltText } = await render(<Footer />);
  const logoImage = getByAltText('Deco Choice');
  expect(logoImage).toHaveAttribute('src', 'logo.png')
});
