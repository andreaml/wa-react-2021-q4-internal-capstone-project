import Content from './templates/Content';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/scss/theme';

function App() {
  const page = 'homepage';

  return (
    <ThemeProvider theme={theme}>
      <Content page={page} />
    </ThemeProvider>
  );
}

export default App;
