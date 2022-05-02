import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';

export const StyledSearch = styled.div`
  background-color: ${(props) => props.theme.lightBackground};
  column-gap: 30px;
  display: grid;
  grid-template-areas:
    'title'
    'headline'
    'productsGrid'
    'pagination';
  grid-template-columns: 1fr;
  padding-bottom: 50px;

  @media ${device.tablet} {
    margin-top: 60px;
  }
`;

export const StyledTitle = styled.h1`
  grid-area: title;
  text-align: center;
`;

export const StyledHeadline = styled.p`
  grid-area: headline;
  text-align: center;
`;
