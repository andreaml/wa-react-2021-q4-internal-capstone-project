import styled, { css } from 'styled-components';
import { device } from '../../utils/scss/mediaQueries';

const buttonSize = '25px';

const Line = styled.span`
  width: ${buttonSize};
  height: 2px;
  border-radius: 10px;
  background: black;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  ${({ top }) => (
    top && css`
      transform: ${({ expanded }) => expanded ? 'rotate(45deg)' : 'rotate(0)'};
    `
  )}

  ${({ middle }) => (
    middle && css`
      opacity: ${({ expanded }) => expanded ? 0 : 1 };
      transform: ${({ expanded }) => expanded ? 'translateX(20px)' : 'translateX(0)'};
    `
  )}

  ${({ bottom }) => (
    bottom && css`
      transform: ${({ expanded }) => expanded ? 'rotate(-45deg)' : 'rotate(0)'};
    `
  )}
`

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${buttonSize};
  justify-content: space-around;
  padding: 0;
  right: 15px;
  top: 50%;
  width: ${buttonSize};

  &:focus {
    outline: none;
  }

  &:hover {
    ${Line} {
      background: ${props => props.theme.main};
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`

const HamburgerButton = ({ onClick, mobileNavbarIsExpanded }) => {
  return (
    <Button
      type='button'
      title='Toggle menu'
      onClick={onClick}
      expanded={mobileNavbarIsExpanded}
      aria-expanded={mobileNavbarIsExpanded}
    >
      <Line top expanded={mobileNavbarIsExpanded} />
      <Line middle expanded={mobileNavbarIsExpanded} />
      <Line bottom expanded={mobileNavbarIsExpanded} />
    </Button>
  )
}

export default HamburgerButton;