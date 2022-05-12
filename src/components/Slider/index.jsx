import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledButtonsWrapper,
  StyledLoadingSlider,
  StyledSliderButton,
  StyledSliderImage,
  StyledSliderTitle,
  StyledSliderWrapper,
  StyledSlidesCounter,
} from './styled';

function Slider({ featuredBanners, isLoading }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState({});

  useEffect(() => {
    if (!isLoading) {
      setCurrentSlide(featuredBanners[currentSlideIndex]?.data || {});
    }
  }, [currentSlideIndex, isLoading, featuredBanners]);

  const goPrevSlide = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(featuredBanners.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const goNextSlide = () => {
    if (currentSlideIndex === featuredBanners.length - 1) {
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
      <StyledSliderTitle data-testid="slideTitle">
        {currentSlide.title}
      </StyledSliderTitle>
      <StyledButtonsWrapper>
        <StyledSliderButton type="button" left onClick={goPrevSlide}>
          {' '}
          &lt;{' '}
        </StyledSliderButton>
        <StyledSliderButton type="button" right onClick={goNextSlide}>
          {' '}
          &gt;{' '}
        </StyledSliderButton>
        <StyledSlidesCounter data-testid="slidesCounter">
          {currentSlideIndex + 1}&nbsp;&nbsp;/&nbsp;&nbsp;
          {featuredBanners.length || '...'}{' '}
        </StyledSlidesCounter>
      </StyledButtonsWrapper>
    </StyledSliderWrapper>
  );
}

Slider.propTypes = {
  featuredBanners: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        main_image: PropTypes.shape({
          alt: PropTypes.string,
          url: PropTypes.string,
        }),
        title: PropTypes.string,
      }),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Slider;
