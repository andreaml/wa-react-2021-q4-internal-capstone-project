import React, { useEffect, useState } from 'react';
import useFeaturedBanners from '../../utils/hooks/useFeaturedBanners';
import {
  StyledButtonsWrapper,
  StyledLoadingSlider,
  StyledSliderButton,
  StyledSliderImage,
  StyledSliderTitle,
  StyledSliderWrapper,
  StyledSlidesCounter,
} from './styled';

function Slider() {
  const { data, isLoading } = useFeaturedBanners();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState({});

  useEffect(() => {
    if (!isLoading) {
      const { results = [] } = data;
      setCurrentSlide(results[currentSlideIndex]?.data || {});
    }
  }, [currentSlideIndex, isLoading, data]);

  const goPrevSlide = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(data.results.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const goNextSlide = () => {
    if (currentSlideIndex === data.results.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  if (isLoading) {
    return <StyledLoadingSlider title="Loading Slider..." />;
  }
  return (
    <StyledSliderWrapper>
      <StyledSliderImage
        src={currentSlide.main_image?.url}
        alt={currentSlide.main_image?.alt}
      />
      <StyledSliderTitle>{currentSlide.title}</StyledSliderTitle>
      <StyledButtonsWrapper>
        <StyledSliderButton type="button" left onClick={goPrevSlide}>
          {' '}
          &lt;{' '}
        </StyledSliderButton>
        <StyledSliderButton type="button" right onClick={goNextSlide}>
          {' '}
          &gt;{' '}
        </StyledSliderButton>
        <StyledSlidesCounter>
          {currentSlideIndex + 1}&nbsp;&nbsp;/&nbsp;&nbsp;
          {data?.results?.length || '...'}{' '}
        </StyledSlidesCounter>
      </StyledButtonsWrapper>
    </StyledSliderWrapper>
  );
}

export default Slider;
