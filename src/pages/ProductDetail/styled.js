import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';

export const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.lightBackground};
  column-gap: 30px;
  display: grid;
  grid-template-areas:
    'headline'
    'productGalleryGrid'
    'productInfo';
  grid-template-columns: 1fr;
  padding-bottom: 50px;

  @media ${device.tablet} {
    grid-template-areas:
      'headline headline'
      'productGalleryGrid productInfo'
      'productGalleryGrid productInfo';
    grid-template-columns: 1fr 1fr;
    margin-top: 60px;
  }
`;

export const StyledTitle = styled.h1`
  grid-area: headline;
  text-align: center;
`;

export const StyledProductInfoWrapper = styled.section`
  grid-area: productInfo;
`;
