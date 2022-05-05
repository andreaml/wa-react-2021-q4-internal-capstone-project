import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';

export const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.lightBackground};
  column-gap: 30px;
  display: grid;
  grid-template-areas:
    'headline'
    'productsTable'
    'checkoutForm';
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  min-height: calc(100vh - 250px);
  padding: 20px 20px 50px 20px;

  @media ${device.tablet} {
    grid-template-areas:
      'headline headline'
      'productsTable checkoutForm';
    grid-template-columns: minmax(auto, 700px) minmax(auto, 300px);
    margin-top: 60px;
  }
  @media ${device.laptop} {
    grid-template-columns: minmax(auto, 700px) minmax(auto, 400px);
  }
`;

export const StyledTitle = styled.h1`
  display: flex;
  font-size: 1.5em;
  grid-area: headline;
  justify-content: space-between;
  text-align: left;
  width: 100%;

  @media ${device.tablet} {
    font-size: revert;
  }
`;
