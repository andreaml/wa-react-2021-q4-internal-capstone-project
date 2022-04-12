import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';

const SliderWrapper = styled.div`
  position: relative;
`

const SliderImage = styled.img`
  width: 100%;
`

const SliderTitle = styled.h1`
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  font-size: 3rem;
  left: 0;
  padding: 15px 5% 15px 15px;
  position: absolute;
  top: 30%;
`

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  left: 60vw;
`

const SliderButton = styled.button`
  background-color: ${props => props.theme.main};
  border: none;
  color: white;
  cursor: pointer;
  height: 30px;
  text-align: center;
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
`

const SlidesCounter = styled.span`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  color: ${props => props.theme.main};
  display: inline-block;
  height: 30px;
  margin-left: 15px;
  padding: 5px 10px;
`

const Slider = () => {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
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
    return (<h2>Loading content...</h2>);
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