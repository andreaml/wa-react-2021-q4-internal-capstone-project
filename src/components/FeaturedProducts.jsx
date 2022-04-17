import { useState } from 'react';
import styled from 'styled-components';
import { featuredProducts } from '../assets/data/featured-products';
import { device } from '../utils/scss/mediaQueries';
import { LoadingBackgroundAnimation } from '../utils/scss/scssMixins';

const Wrapper = styled.div`
  background-color: ${props => props.theme.lightBackground};
  padding: 20px 0;
  width: 100%;

  @media ${device.tablet} {
    padding: 50px 0;
  }
`

const ProductsHeader = styled.h2`
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 0;
  text-transform: uppercase;
`
  
const ProductsWrapper = styled.div`
  column-gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));
  justify-content: center;
  margin: 0 auto;
  row-gap: 40px;
  row-gap: 20px;
  width: 95vw;
`

const ProductWrapper = styled.a`
  background: white;
  border-radius: 8px;
  padding-bottom: 15px;
  position: relative;
  text-decoration: none;
  transition: transform .5s; 
  box-shadow: 0px 7px 13px ${props => props.theme.loadingBackground};
  

  &:hover {
    transform: scale(1.04);
    box-shadow: 1px 7px 9px ${props => props.theme.mediumGray};
  }
`

const CategoryImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '58 / 75'})}
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
`

const ProductName = styled.p`
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 10px 0 5px 0;
  padding: 0 5px;
`

const ProductPrice = styled(ProductName)`
  color: ${props => props.theme.main};
`;

const ProductCategoryName = styled.span`
  color: ${props => props.theme.darkGray};
  display: block;
  font-size: 0.7rem;
  text-transform: capitalize;
`

const ProductCard = ( { data } ) => {
  return (
    <ProductWrapper href="#" title={data.name}>
      <CategoryImage src={data.mainimage?.url} alt={data.mainimage?.alt} />
      <ProductName>{data.name}</ProductName>
      <ProductPrice>${data.price}</ProductPrice>
      <ProductCategoryName>{data.category?.slug}</ProductCategoryName>
    </ProductWrapper>
  );
};

const FeaturedProducts = () => {
  const [ products ] = useState(featuredProducts.results);
  return (
    <Wrapper>
      <ProductsHeader>Featured&nbsp;&nbsp;Products</ProductsHeader>
      <ProductsWrapper>
        { products.map(({id, data}) => (
          <ProductCard key={id} data={data} />
        ))}
      </ProductsWrapper>
    </Wrapper>
  )
}

export default FeaturedProducts;