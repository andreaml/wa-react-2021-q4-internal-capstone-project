import styled, { css } from 'styled-components';

export const StyledWrapper = styled.form`
  align-items: center;
  color: black;
  display: flex;
  height: 100%;
  justify-content: space-between;
  position: relative;
  top: 0;
  min-width: 30px;
  width: fit-content;
`;

export const StyledInput = styled.input`
  border-radius: 3px;
  border: 1px solid;
  height: 55px;
  max-width: 500px;
  opacity: 0;
  position: absolute;
  right: -5px;
  top: -11px;
  transition: all 0.2s linear;
  width: 0;

  ${({ expanded }) =>
    expanded &&
    css`
      opacity: 1;
      padding-left: 10px;
      padding-right: 40px;
      width: calc(80vw - 30px);
    `}
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 30px;
  padding: 0 5px;
  position: absolute;
  right: 0;
  top: calc(50% - 15px);
  width: 30px;

  svg path {
    transition: all 0.3s ease;
  }

  &:hover {
    svg path {
      fill: ${(props) => props.theme.main};
    }
  }
`;
