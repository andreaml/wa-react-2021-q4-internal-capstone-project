import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Homepage from './Homepage';
const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`

const Something = styled.div`
  height: 500px;
`

const contentComponents = {
  homepage: Homepage,
};

const Content = ({ page, pageProps }) => {
  const ContentToRender = contentComponents[page];

  return (
    <Wrapper>
      <Header />
      <ContentToRender story={pageProps} />
      <Something />
      <Footer />
    </Wrapper>
  )
}

export default Content;