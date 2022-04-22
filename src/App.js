import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PageProvider /* usePage */ } from './utils/hooks/PageContext';
import Header from './components/Header';
import Footer from './components/Footer';
// import Homepage from './templates/Homepage';
// import ProductList from './templates/ProductList';
import theme from './utils/scss/theme';
import Content from './templates/Content';

const StyledWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  // const value = usePage();
  // console.log(value);

  return (
    <ThemeProvider theme={theme}>
      <PageProvider page="homepage">
        <StyledWrapper>
          <Header />
          <Content />
          <Footer />
        </StyledWrapper>
      </PageProvider>
    </ThemeProvider>
  );
}

export default App;
