import { css } from 'styled-components';

const LoadingBackgroundAnimation = ({ aspectRatio = null } = {}) => css`
  ${aspectRatio &&
  css`
    aspect-ratio: ${aspectRatio};
  `}
  background: ${(props) => props.theme.loadingBackground};
  background: linear-gradient(
    110deg,
    ${(props) => props.theme.loadingBackground} 8%,
    #f5f5f5 18%,
    ${(props) => props.theme.loadingBackground} 33%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export default LoadingBackgroundAnimation;
