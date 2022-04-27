import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import StyledSimpleLink from '../SimpleLink.styled';

export const StyledWrapper = styled.nav`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  color: black;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;

  @media ${device.tablet} {
    position: fixed;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  min-height: 30px;
  list-style: none;
  flex-grow: 2;
  justify-content: flex-end;
  padding: 0 10px;
`;

export const StyledCategoriesList = styled(StyledList)`
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: calc(100vh - 60px);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 60px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ expanded }) =>
    expanded ? 'translateX(0)' : 'translateX(-100%)'};
  width: 100%;

  @media ${device.tablet} {
    background-color: transparent;
    border-top: none;
    position: unset;
    flex-direction: row;
    transition: unset;
    transform: unset;
    width: auto;
  }
`;

export const StyledListItem = styled.li`
  margin: 0;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  padding: 0 5px;

  @media ${device.tablet} {
    margin: 0 10px;
  }

  ${StyledCategoriesList} > &:hover {
    background-color: ${(props) => props.theme.lightBackground};
    a {
      color: ${(props) => props.theme.main};
    }

    @media ${device.tablet} {
      background-color: transparent;
    }
  }

  ${StyledSimpleLink} {
    display: block;
    padding: 10px 0;
    transition: inherit;
    width: 100%;
  }
`;
