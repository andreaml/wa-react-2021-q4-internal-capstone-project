import styled, { css } from 'styled-components';

const SimpleLink = styled.a`
  color: black;
  font-size: 14px;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.light &&
    css`
      color: white;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 12px;
    `}

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

export default SimpleLink;
