import React from 'react';
import { ReactComponent as CactusIcon } from '../../assets/icons/cactus.svg';
import StyledButtonLink from '../../components/StyledButtonLink';
import { Styled404, StyledParagraph, StyledTitle } from './styled';

function Page404() {
  return (
    <Styled404>
      <CactusIcon />
      <StyledTitle>404 - Page not found</StyledTitle>
      <StyledParagraph>
        The page you were looking for does not exist
      </StyledParagraph>
      <StyledButtonLink main center to="/">
        Go to Homepage
      </StyledButtonLink>
    </Styled404>
  );
}

export default Page404;
