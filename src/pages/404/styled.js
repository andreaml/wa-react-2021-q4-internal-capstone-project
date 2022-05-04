import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';

export const Styled404 = styled.div`
  background-color: ${(props) => props.theme.lightBackground};
  padding: 50px 0;
  text-align: center;

  @media ${device.tablet} {
    margin-top: 60px;
  }

  svg {
    height: 200px;
    width: 200px;
  }
`;

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.main};
  margin: 30px 0;
`;

export const StyledParagraph = styled.p`
  margin: 40px 0;
`;
