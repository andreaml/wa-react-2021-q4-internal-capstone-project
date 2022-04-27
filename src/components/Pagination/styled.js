import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  column-gap: 15px;
  display: flex;
  flex-flow: row wrap;
  grid-area: pagination;
  justify-content: center;
  max-width: 100vw;
  padding: 20px 40px;
  width: 100%;
`;

export const StyledNavigationButton = styled.button`
  background: ${(props) => props.theme.main};
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 8px;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.darkMain};
    text-decoration: underline;
  }
  &:disabled {
    background: ${(props) => props.theme.loadingBackground};
    cursor: default;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const StyledPaginationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.main};
    text-decoration: underline;
  }

  ${({ activePage }) =>
    activePage &&
    css`
      color: ${(props) => props.theme.main};
    `}
`;
