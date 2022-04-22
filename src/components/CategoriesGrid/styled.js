import styled from 'styled-components';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';
import device from '../../utils/scss/mediaQueries';

const columnGap = 20;

const gridWrapperWidth = 95;

export const StyledWrapper = styled.div`
  margin: 20px auto;
  width: 100%;

  @media ${device.tablet} {
    margin: 50px auto;
  }
`;

export const StyledCategoriesHeader = styled.h2`
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledCategoriesWrapper = styled.div`
  column-gap: ${columnGap}px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  row-gap: 20px;
  width: ${gridWrapperWidth}vw;
`;

export const StyledCategoryWrapper = styled.a`
  background: ${(props) => props.theme.main};
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: ${gridWrapperWidth}vw;
  position: relative;
  text-decoration: none;

  &:hover {
    box-shadow: 1px 1px 13px grey;
  }

  @media ${device.mobileL} {
    // we want 2 columns and by that exists 1 gap.
    flex-basis: calc((${gridWrapperWidth}vw / 2) - (${columnGap}px));
  }

  @media ${device.laptop} {
    // columnGap multiplied * 2 because we want 3 columns and by that exist 2 gaps.
    flex-basis: calc((${gridWrapperWidth}vw / 3) - (${columnGap * 2}px / 3));
  }
`;

export const StyledCategoryImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '621 / 398' })}
  margin-bottom: 2px;
  width: 100%;
`;

export const StyledCategoryName = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  color: black;
  padding: 10px 15px 10px 5px;
  position: absolute;
  text-transform: uppercase;

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    font-size: revert;
  }
`;

export const StyledCategoryLinkText = styled.span`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 5px;
  color: white;
  font-size: 0.8rem;
  padding: 5px 10px;
  position: absolute;
  right: 0;
`;
