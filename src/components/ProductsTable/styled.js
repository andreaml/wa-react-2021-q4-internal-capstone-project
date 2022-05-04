import styled from 'styled-components';
// import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledTable = styled.table`
  grid-area: productsTable;
  width: 100%;
`;

export const StyledTableHead = styled.th`
  text-align: left;
`;

export const StyledTableProductInfo = styled.td`
  text-align: center;
`;

export const StyledTableProductInfoDetails = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
`;

export const StyledCategoryImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '58 / 75' })}
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100px;
`;
