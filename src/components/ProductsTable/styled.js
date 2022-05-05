import styled from 'styled-components';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledTable = styled.table`
  display: ${({ display }) => display || 'table'};
  grid-area: productsTable;
  max-width: 100%;
  overflow-x: auto;
  width: 100%;
`;

export const StyledTableHead = styled.th`
  padding: 0 5px;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`;

export const StyledTableFoot = styled.tfoot`
  text-align: right;
`;

export const StyledTableProductInfo = styled.td`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  padding: 5px 0;
  text-align: ${({ right }) => (right ? 'right' : 'center')};
`;

export const StyledTrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 15px;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.main};
  }

  svg {
    height: 23px;
    margin: 0;
    width: 23px;
  }
`;

export const StyledTableProductInfoDetails = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  text-align: left;
`;

export const StyledCategoryImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '58 / 75' })}
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100px;
`;
