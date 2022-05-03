import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledWrapper = styled.aside`
  background-color: transparent;
  grid-area: sidebar;
  height: fit-content;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-top: 20px;
    min-height: 30vh;
    position: sticky;
    top: 80px;
  }
`;

export const StyledContentWrapper = styled.div`
  background-color: white;
  ${({ isLoading }) => isLoading && LoadingBackgroundAnimation()}
  border-top: 1px solid ${(props) => props.theme.mediumGray};
  box-shadow: 1px 7px 9px ${(props) => props.theme.mediumGray};
  min-height: 30vh;
  position: fixed;
  top: 60px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ expanded }) =>
    expanded ? 'translateX(0)' : 'translateX(calc(-100% - 9px))'};
  width: 100vw;
  z-index: 1;

  @media ${device.tablet} {
    border-top: none;
    margin-bottom: 30px;
    position: initial;
    transform: none;
    width: 100%;
  }
`;

export const StyledFilterButton = styled.button`
  align-items: center;
  background: white;
  border: transparent;
  box-shadow: 1px 7px 9px ${(props) => props.theme.mediumGray};
  column-gap: 10px;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  margin-bottom: 30px;
  padding: 10px 20px;
  transition: all 0.3s ease;
  width: 100%;
  &:hover {
    background: ${(props) => props.theme.loadingBackground};
    color: ${(props) => props.theme.main};
    svg path {
      stroke: ${(props) => props.theme.main};
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const StyledFilterTitle = styled.h3`
  color: ${(props) => props.theme.main};
  margin: 0;
  padding: 15px 15px 0 15px;
`;

export const StyledCloseButton = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
  height: 22px;
  padding: 0;
  position: absolute;
  right: 20px;
  transition: all 0.3s ease;
  width: 22px;

  &:hover {
    svg path {
      fill: ${(props) => props.theme.main};
    }
  }

  @media ${device.tablet} {
    display: none;
  }
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
