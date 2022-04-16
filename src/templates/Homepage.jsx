import styled from 'styled-components';
import Slider from '../components/Slider';
import CategoriesGrid from '../components/CategoriesGrid';

const Home = styled.div`
`

const Homepage = () => {
  return (
    <Home>
      <Slider />
      <CategoriesGrid />
    </Home>
  )
}

export default Homepage;