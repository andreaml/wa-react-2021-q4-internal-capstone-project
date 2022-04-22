import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledLine } from './styled';

function HamburgerButton({ onClick, mobileNavbarIsExpanded }) {
  return (
    <StyledButton
      type="button"
      title="Toggle menu"
      onClick={onClick}
      expanded={mobileNavbarIsExpanded}
      aria-expanded={mobileNavbarIsExpanded}
    >
      <StyledLine top expanded={mobileNavbarIsExpanded} />
      <StyledLine middle expanded={mobileNavbarIsExpanded} />
      <StyledLine bottom expanded={mobileNavbarIsExpanded} />
    </StyledButton>
  );
}

HamburgerButton.propTypes = {
  onClick: PropTypes.instanceOf(Function).isRequired,
  mobileNavbarIsExpanded: PropTypes.bool.isRequired,
};

export default HamburgerButton;
