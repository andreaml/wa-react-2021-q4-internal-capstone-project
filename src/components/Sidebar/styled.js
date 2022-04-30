import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledWrapper = styled.aside`
  background-color: white;
  box-shadow: 1px 7px 9px ${(props) => props.theme.mediumGray};
  grid-area: sidebar;
  height: fit-content;
  margin-bottom: 20px;

  @media ${device.tablet} {
    min-height: 30vh;
    margin-bottom: 0;
  }
`;

export const StyledContentWrapper = styled.div`
  ${({ isLoading }) => isLoading && LoadingBackgroundAnimation()}
  border-top: 1px solid ${(props) => props.theme.mediumGray};
  box-shadow: 1px 7px 9px ${(props) => props.theme.mediumGray};
  min-height: 30vh;
  position: absolute;
  top: 60px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ expanded }) =>
    expanded ? 'translateX(0)' : 'translateX(-100%)'};
  width: 100vw;
  z-index: 1;

  @media ${device.tablet} {
    border-top: none;
    box-shadow: none;
    position: initial;
    transform: none;
    width: 100%;
  }
`;

export const StyledFilterButton = styled.button`
  align-items: center;
  background: transparent;
  border: transparent;
  column-gap: 10px;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
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
