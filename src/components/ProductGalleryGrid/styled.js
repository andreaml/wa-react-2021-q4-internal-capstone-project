import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

const StyledProductGallery = styled.div`
  grid-area: productGalleryGrid;
  width: 80vw;
  height: 70vh;
  aspect-ratio: 58 / 75;

  @media ${device.tablet} {
    width: 40vw;
    height: auto;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    background: white;
    font-size: 18px;
    text-align: center;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    img {
      ${LoadingBackgroundAnimation()}
      display: block;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .big-swiper {
    height: 80%;
    width: 100%;
  }

  .small-swiper {
    box-sizing: border-box;
    height: 20%;
    padding: 10px 0;

    .swiper-slide {
      height: 100%;
      opacity: 0.4;
      width: 100%;
    }

    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
`;

export default StyledProductGallery;
