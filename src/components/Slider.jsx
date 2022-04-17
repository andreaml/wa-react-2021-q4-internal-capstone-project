import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { device } from '../utils/scss/mediaQueries';
import { LoadingBackgroundAnimation } from '../utils/scss/scssMixins';

const SliderWrapper = styled.div`
  position: relative;
`

const LoadingSlider = styled.div`
  ${LoadingBackgroundAnimation({ aspectRatio: '96 / 47'})}
  width: 100%;
`

const SliderImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '96 / 47'})}
  width: 100%;
`

const SliderTitle = styled.h1`
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
`

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  left: 40vw;

  @media ${device.tablet} { 
    left: 60vw;
  }
`

const SliderButton = styled.button`
  background-color: ${props => props.theme.main};
  border: none;
  color: white;
  cursor: pointer;
  height: 30px;
  text-align: center;
  vertical-align: bottom;
  width: 40px;

  ${props => props.left && css`
    border-right: 1px solid white;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  `}
  ${props => props.right && css`
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  `}

  @media ${device.tablet} { 
    font-size: 1.5rem;
  }
`

const SlidesCounter = styled.span`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  color: ${props => props.theme.main};
  display: inline-block;
  height: 30px;
  margin-left: 15px;
  padding: 5px 10px;

  @media ${device.tablet} { 
    font-size: 1rem;
    // height: 40px;
    padding: 5px 20px;
  }
`

const Slider = () => {
  const { data, isLoading } = useFeaturedBanners();
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
  const [ currentSlide, setCurrentSlide ] = useState( {} );

  useEffect(() => {
    if (!isLoading) {
      const { results = [] } = data;
      setCurrentSlide(results[currentSlideIndex]?.data || {});
    }
  }, [ currentSlideIndex, isLoading, data ]);

  const goPrevSlide = () => {
    console.log('entra')
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(data.results.length - 1)
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  const goNextSlide = () => {
    console.log('entra')
    if (currentSlideIndex === data.results.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }
  if (isLoading) {
    return (<LoadingSlider title='Loading Slider...'/>);
  }
  return (
    <SliderWrapper>
      <SliderImage src={currentSlide.main_image?.url} alt={currentSlide.main_image?.alt} />
      <SliderTitle>{currentSlide.title}</SliderTitle>
      <ButtonsWrapper>
        <SliderButton type='button' left onClick={goPrevSlide}> &lt; </SliderButton>
        <SliderButton type='button' right onClick={goNextSlide}> &gt; </SliderButton>
        <SlidesCounter>{currentSlideIndex + 1}&nbsp;&nbsp;/&nbsp;&nbsp;{data?.results?.length || '...'} </SlidesCounter>
      </ButtonsWrapper>
    </SliderWrapper>
  )
}

export default Slider;