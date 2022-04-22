import styled, { css } from 'styled-components';
// Question: If I create a single file styled component, how should I name the file?
// ((StyledComponent.styled.js or Component.styled.js))
// And how to export its component name? ((StyledComponent or Component))
const StyledSimpleLink = styled.a`
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

export default StyledSimpleLink;
