import React from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider';
import CategoriesGrid from '../components/CategoriesGrid';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = styled.div``;

function Homepage() {
  return (
    <Home>
      <Slider />
      <CategoriesGrid />
      <FeaturedProducts />
    </Home>
  );
}

export default Homepage;
