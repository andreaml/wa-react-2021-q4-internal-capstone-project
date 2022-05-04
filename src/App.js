import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContextProvider } from './utils/hooks/CartContext';
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
      <CartContextProvider>
        <StyledWrapper>
          <Router>
            <Content />
          </Router>
        </StyledWrapper>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
