import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.lightBackground};
  ${({ isLoading }) => isLoading && LoadingBackgroundAnimation()}
  padding: 20px 0 50px 0;
  width: 100%;

  @media ${device.tablet} {
    padding: 50px 0;
  }
`;

export const StyledProductsHeader = styled.h2`
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledProductsWrapper = styled.div`
  column-gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));
  justify-content: center;
  margin: 0 auto 50px auto;
  min-height: 40vh;
  row-gap: 40px;
  row-gap: 20px;
  width: 95vw;
`;
