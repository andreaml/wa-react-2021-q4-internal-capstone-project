import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Homepage from './Homepage';

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`;

const contentComponents = {
  homepage: Homepage,
};

function Content({ page, pageProps }) {
  const ContentToRender = contentComponents[page];

  return (
    <Wrapper>
      <Header />
      <ContentToRender pageProps={pageProps} />
      <Footer />
    </Wrapper>
  );
}

Content.propTypes = {
  page: PropTypes.string.isRequired,
  pageProps: PropTypes.instanceOf(Object),
};

Content.defaultProps = {
  pageProps: {},
};

export default Content;
