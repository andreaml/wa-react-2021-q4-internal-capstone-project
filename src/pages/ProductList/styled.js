import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';

export const StyledProductList = styled.div`
  background-color: ${(props) => props.theme.lightBackground};
  column-gap: 30px;
  display: grid;
  grid-template-areas:
    'headline headline'
    'sidebar productsGrid';
  grid-template-columns: 200px 1fr;

  @media ${device.tablet} {
    margin-top: 60px;
  }
`;

export const StyledTitle = styled.h1`
  grid-area: headline;
  text-align: center;
`;
