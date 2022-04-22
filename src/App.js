import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './templates/Homepage';
import theme from './utils/scss/theme';

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Homepage />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
