import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';

export const StyledWrapper = styled.footer`
  background-color: ${(props) => props.theme.darkGray};
  color: white;
  padding: 20px 0;
  width: 100%;
`;

export const StyledInnerWrapper = styled.div`
  column-gap: 2rem;
  display: grid;
  font-size: 12px;
  grid-template-areas:
    'brandInfo brandInfo'
    'directory contact'
    'copyright copyright';
  margin: 0 auto;
  max-width: 1500px;
  row-gap: 2rem;
  width: 90vw;

  @media ${device.tablet} {
    column-gap: 4rem;
    grid-template-areas:
      'brandInfo directory contact'
      'copyright copyright copyright';
    grid-template-columns: repeat(3, auto);
  }
`;

export const StyledSection = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
  text-align: left;
  p {
    line-height: 16px;
  }
`;

export const StyledSectionTitle = styled.h5`
  color: ${(props) => props.theme.main};
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const StyledLogo = styled.img`
  display: block;
  -webkit-filter: invert(1);
  filter: invert(1);
  height: auto;
  margin-bottom: 25px;
  width: 150px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style: none;
  padding: 0;
`;
export const StyledListItem = styled.li`
  margin: 0 0 10px 0;

  * {
    vertical-align: text-top;
  }

  svg {
    height: 15px;
    margin-right: 10px;
    width: 15px;

    path {
      fill: ${(props) => props.theme.main} !important;
    }
  }
`;

export const StyledCopyright = styled.p`
  grid-area: copyright;
  text-align: left;
`;
