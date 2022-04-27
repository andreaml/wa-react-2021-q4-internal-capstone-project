import styled, { css } from 'styled-components';

const StyledLogoImage = styled.img`
  cursor: pointer;
  display: block;
  height: auto;
  max-width: 150px;
  min-width: 100px;
  width: 100%;

  ${(props) =>
    props.footer &&
    css`
      -webkit-filter: invert(1);
      filter: invert(1);
      margin-bottom: 25px;
    `}
`;

export default StyledLogoImage;
