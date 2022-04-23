import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PageProvider } from './utils/hooks/PageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './utils/scss/theme';
import Content from './pages/Content';

const StyledWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`;

function App() {
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
