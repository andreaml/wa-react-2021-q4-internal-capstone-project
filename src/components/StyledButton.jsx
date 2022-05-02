import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  font-weight: 600;
  margin: 0 auto;
  padding: 10px 15px;
  text-decoration: none;
  transition: all 0.3s ease-in;
  background-color: ${(props) => props.theme.darkGray};
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.main};
  }

  &:disabled {
    background-color: ${(props) => props.theme.mediumGray};
    &:hover {
      background-color: ${(props) => props.theme.mediumGray};
      cursor: not-allowed;
    }
  }

  ${(props) =>
    props.main &&
    css`
      background-color: ${props.theme.main};
      color: white;

      &:hover {
        background-color: ${props.theme.darkGray};
      }
    `}

  ${(props) =>
    props.left &&
    css`
      margin-left: 0;
      width: fit-content;
    `}
`;

export default StyledButton;
