import styled, { css } from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledSliderWrapper = styled.div`
  position: relative;
`;

export const StyledLoadingSlider = styled.div`
  ${LoadingBackgroundAnimation({ aspectRatio: '96 / 47' })}
  width: 100%;
`;

export const StyledSliderImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '96 / 47' })}
  width: 100%;
`;

export const StyledSliderTitle = styled.h1`
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  color: black;
  font-size: 1rem;
  left: 0;
  padding: 8px;
  position: absolute;
  top: 10%;

  @media ${device.mobileL} {
    font-size: 1.5rem;
  }

  @media ${device.tablet} {
    font-size: 2rem;
    padding: 15px 5% 15px 15px;
    top: 30%;
  }

  @media ${device.laptopL} {
    font-size: 3rem;
  }
`;

export const StyledButtonsWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  left: 40vw;

  @media ${device.tablet} {
    left: 60vw;
  }
`;

export const StyledSliderButton = styled.button`
  background-color: ${(props) => props.theme.main};
  border: none;
  color: white;
  cursor: pointer;
  height: 30px;
  text-align: center;
  vertical-align: bottom;
  width: 40px;

  ${(props) =>
    props.left &&
    css`
      border-right: 1px solid white;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    `}
  ${(props) =>
    props.right &&
    css`
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    `}

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const StyledSlidesCounter = styled.span`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  color: ${(props) => props.theme.main};
  display: inline-block;
  height: 30px;
  margin-left: 15px;
  padding: 5px 10px;

  @media ${device.tablet} {
    font-size: 1rem;
    padding: 5px 20px;
  }
`;
