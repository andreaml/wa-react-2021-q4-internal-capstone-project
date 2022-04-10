import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Content from './templates/Content';
import { ThemeProvider } from 'styled-components';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

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
