import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import StyledLogoImage from './styled';

function Logo({ footer }) {
  return (
    <Link to="/">
      <StyledLogoImage
        footer={footer}
        src={logo}
        alt="Deco Choice"
        title="Deco Choice"
      />
    </Link>
  );
}

Logo.propTypes = {
  footer: PropTypes.bool,
};

Logo.defaultProps = {
  footer: false,
};

export default Logo;
