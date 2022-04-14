import styled from 'styled-components';
import Slider from '../components/Slider';
import Grid from '../components/Grid';

const Home = styled.div`
`

const Homepage = () => {
  return (
    <Home>
      <Slider />
      <Grid />
    </Home>
  )
}

export default Homepage;