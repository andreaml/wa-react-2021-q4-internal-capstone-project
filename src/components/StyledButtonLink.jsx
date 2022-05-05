import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButtonLink = styled(Link)`
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 10px 15px;
  text-decoration: none;
  transition: all 0.3s ease-in;
  width: fit-content;

  &:hover {
    background-color: ${(props) => props.theme.main};
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
    props.center &&
    css`
      margin: 0 auto;
    `}
  ${(props) =>
    props.right &&
    css`
      margin: 0 0 0 auto;
    `}
  ${(props) =>
    props.left &&
    css`
      margin: 0 auto 0 0;
    `}
`;

export default StyledButtonLink;
