import styled from 'styled-components';

export const StyledWrapper = styled.aside`
  background-color: white;
  box-shadow: 1px 7px 9px ${(props) => props.theme.mediumGray};
  grid-area: sidebar;
  height: fit-content;
`;

export const StyledFilterTitle = styled.h3`
  color: ${(props) => props.theme.main};
  padding: 0 15px;
`;

export const StyledSidebarItemsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const StyledSidebarItemSelector = styled.label`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 20px;
  width: inherit;

  &:hover {
    background-color: ${(props) => props.theme.loadingBackground};
  }

  input[type='checkbox'] {
    accent-color: ${(props) => props.theme.darkMain};
    margin-right: 10px;
  }
`;
