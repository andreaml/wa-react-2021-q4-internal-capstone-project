import styled, { css } from 'styled-components';
import device from '../../../utils/scss/mediaQueries';

const buttonSize = '25px';

export const StyledLine = styled.span`
  width: ${buttonSize};
  height: 2px;
  border-radius: 10px;
  background: black;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  ${({ top }) =>
    top &&
    css`
      transform: ${({ expanded }) =>
        expanded ? 'rotate(45deg)' : 'rotate(0)'};
    `}

  ${({ middle }) =>
    middle &&
    css`
      opacity: ${({ expanded }) => (expanded ? 0 : 1)};
      transform: ${({ expanded }) =>
        expanded ? 'translateX(20px)' : 'translateX(0)'};
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      transform: ${({ expanded }) =>
        expanded ? 'rotate(-45deg)' : 'rotate(0)'};
    `}
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${buttonSize};
  justify-content: space-around;
  padding: 0;
  right: 15px;
  top: 50%;
  width: ${buttonSize};

  &:focus {
    outline: none;
  }

  &:hover {
    ${StyledLine} {
      background: ${(props) => props.theme.main};
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;
