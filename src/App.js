import './App.css';
import Content from './templates/Content';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = {
    main: '#f27c2d',
    darkGray: '#272727'
  }

  const page = 'homepage';

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Content page={page} />
      </ThemeProvider>
    </div>
  );
}

export default App;
