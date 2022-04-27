import React from 'react';
import PropTypes from 'prop-types';
import { usePage } from '../../utils/hooks/PageContext';
import logo from '../../logo.png';
import StyledLogoImage from './styled';

function Logo({ footer }) {
  const { setCurrentPage } = usePage();
  return (
    <StyledLogoImage
      footer={footer}
      src={logo}
      alt="Deco Choice"
      title="Deco Choice"
      onClick={() => {
        setCurrentPage('homepage');
      }}
    />
  );
}

Logo.propTypes = {
  footer: PropTypes.bool,
};

Logo.defaultProps = {
  footer: false,
};

export default Logo;
