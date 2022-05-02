import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledWrapper = styled.div`
  ${({ isLoading }) => isLoading && LoadingBackgroundAnimation()}
  background-color: ${(props) => props.theme.lightBackground};
  column-gap: 30px;
  display: grid;
  grid-template-areas:
    'productGalleryGrid'
    'headline'
    'productInfo';
  grid-template-columns: 1fr;
  justify-items: center;
  min-height: calc(100vh - 250px);
  padding-bottom: 50px;

  @media ${device.tablet} {
    grid-template-areas:
      'headline headline'
      'productGalleryGrid productInfo';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content 1fr;
    margin-top: 60px;
    padding-right: 3vw;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 1.5em;
  grid-area: headline;
  text-align: left;
  padding: 0 20px;
  width: 100%;

  @media ${device.tablet} {
    font-size: revert;
    text-align: center;
  }
`;

export const StyledProductInfoWrapper = styled.section`
  grid-area: productInfo;
  padding: 0 20px;
`;

export const StyledProductInfo = styled.p`
  color: ${(props) => props.theme.darkGray};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: capitalize;
`;

export const StyledProductInfoSecondary = styled.span`
  color: ${(props) => props.theme.main};
  font-weight: normal;
  margin-left: 15px;
`;

export const StyledProductInfoTag = styled.span`
  border: 1px solid ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};
  display: inline-block;
  margin: 5px 10px;
  padding: 5px;
  text-transform: capitalize;
  width: fit-content;
`;

export const StyledProductInfoTable = styled.table`
  border-collapse: collapse;
  text-align: left;

  td,
  th {
    padding: 10px;
    border: 1px solid ${(props) => props.theme.mediumGray};
  }
  tr:first-child th {
    border-top: 0;
  }
  tr:last-child td {
    border-bottom: 0;
  }
  tr td:first-child,
  tr th:first-child {
    border-left: 0;
    padding-left: 0;
    width: 30%;
  }
  tr td:last-child,
  tr th:last-child {
    border-right: 0;
  }
`;

export const StyledProductAddToCartWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  margin: 20px 0;
`;

export const StyledProductAddToCartInput = styled.input`
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  text-align: center;
  width: 50px;

  &:disabled {
    border: 1px solid ${(props) => props.theme.mediumGray};
    color: ${(props) => props.theme.mediumGray};
  }
`;
