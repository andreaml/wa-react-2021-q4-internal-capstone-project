import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  height: 30px;
  padding: 0 5px;
  position: relative;
  width: 30px;

  svg {
    height: 100%;
    width: 100%;

    path {
      transition: all 0.3s ease;
    }
  }

  &:hover {
    svg path {
      fill: ${(props) => props.theme.main};
    }
  }
`;

export const StyledCartItemsBadge = styled.span`
  position: absolute;
  background: ${(props) => props.theme.main};
  border-radius: 50%;
  font-size: 10px;
  color: white;
  padding: 3px 5px;
  right: -10px;
  top: -5px;
`;
