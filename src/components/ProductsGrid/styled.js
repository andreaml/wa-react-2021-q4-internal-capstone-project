import styled from 'styled-components';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledWrapper = styled.div`
  grid-area: productsGrid;
  padding: 20px 40px;
  text-align: center;
  width: 100%;
`;

export const StyledProductsWrapper = styled.div`
  column-gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));
  justify-content: center;
  margin: 0 auto;
  row-gap: 40px;
  row-gap: 20px;
  min-height: calc(100vh - 431px);
  ${({ isLoading }) => isLoading && LoadingBackgroundAnimation()}
`;

export const StyledNoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  width: 100%;

  svg {
    height: 100px;
    width: 100px;
  }
`;

export const StyledNoResultsTitle = styled.h2`
  color: ${(props) => props.theme.main};
  margin-bottom: 0;
`;
