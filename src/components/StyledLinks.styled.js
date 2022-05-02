import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const sharedLinksCss = css`
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

export const StyledSimpleLink = styled.a`
  ${sharedLinksCss}
`;

export const StyledLink = styled(Link)`
  ${sharedLinksCss}
`;

export const StyledNavLink = styled(NavLink)`
  ${sharedLinksCss}
`;
