import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledWrapper = styled.div`
  ${({ isLoading }) => isLoading && LoadingBackgroundAnimation()}
  background-color: ${(props) => props.theme.lightBackground};
  column-gap: 30px;
  display: grid;
  grid-template-areas:
    'headline'
    'productsTable';
  grid-template-columns: 1fr;
  justify-items: center;
  min-height: calc(100vh - 250px);
  padding: 20px 20px 50px 20px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 200px;
    grid-template-rows: max-content 1fr;
    margin-top: 60px;
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
