import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 30px;
  padding: 0 5px;
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

export default StyledButton;
