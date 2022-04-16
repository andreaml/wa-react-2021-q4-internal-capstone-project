import { useState } from 'react';
import styled from 'styled-components';
import { productCategories } from '../assets/data/product-categories';
import { LoadingBackgroundAnimation } from '../utils/scssMixins';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat( 4, 1fr );
  margin: 50px auto;
  max-width: 90vw;
`

const CategoryWrapper = styled.a`
  background: ${props => props.theme.main};
  grid-column: span 2;
  position: relative;
  text-decoration: none;

  &:hover {
    box-shadow: 1px 1px 13px grey;
  }

  &:nth-last-child(1):nth-child(odd) {
    grid-column: 2 / span 2;
  }
`

const CategoryImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '621 / 398'})}
  margin-bottom: 2px;
  width: 100%;
`

const CategoryName = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: black;
  padding: 10px 15px 10px 5px;
  position: absolute;
  text-transform: uppercase;
`

const CategoryLinkText = styled.span`
  background-color: rgba(0,0,0, 0.5);
  bottom: 5px;
  color: white;
  font-size: 0.8rem;
  padding: 5px 10px;
  position: absolute;
  right: 0;
`

const Grid = () => {
  const [ categories ] = useState(productCategories.results);
  return (
    <GridWrapper>
      { categories.map(({id, data}) => (
        <CategoryWrapper key={id} href="#" title={data.name}>
          <CategoryName>{data.name}</CategoryName>
          <CategoryImage src={data.main_image.url} alt={data.main_image.alt} />
          <CategoryLinkText>Watch more &rarr;</CategoryLinkText>
        </CategoryWrapper>
      ))}
    </GridWrapper>
  )
}

export default Grid;