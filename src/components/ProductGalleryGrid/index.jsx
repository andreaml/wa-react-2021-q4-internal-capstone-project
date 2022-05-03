import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import StyledProductGallery from './styled';

SwiperCore.use([Navigation, Thumbs]);

function ProductGalleryGrid({ images, isLoading }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const generateSwiperSlides = (swiperClass) =>
    images.map(({ image }) => (
      <SwiperSlide key={`${swiperClass}-${image.url}`}>
        <img src={image.url} alt={image.alt} />
      </SwiperSlide>
    ));

  return (
    <StyledProductGallery>
      {!isLoading && images.length > 0 && (
        <>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            className="big-swiper"
          >
            {generateSwiperSlides('big-swiper')}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={10}
            slidesPerView={images.length || 4}
            freeMode
            watchSlidesProgress
            className="small-swiper"
          >
            {generateSwiperSlides('small-swiper')}
          </Swiper>
        </>
      )}
    </StyledProductGallery>
  );
}

ProductGalleryGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string,
      }),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ProductGalleryGrid;
