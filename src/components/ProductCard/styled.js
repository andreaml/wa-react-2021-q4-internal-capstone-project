import styled from 'styled-components';
import LoadingBackgroundAnimation from '../../utils/scss/scssMixins';

export const StyledProductWrapper = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 7px 13px ${(props) => props.theme.loadingBackground};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding-bottom: 15px;
  position: relative;
  text-align: center;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.04);
    box-shadow: 1px 7px 9px ${(props) => props.theme.mediumGray};
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

export const StyledCategoryImage = styled.img`
  ${LoadingBackgroundAnimation({ aspectRatio: '58 / 75' })}
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
`;

export const StyledProductName = styled.p`
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 10px 0 5px 0;
  padding: 0 5px;
`;

export const StyledProductPrice = styled(StyledProductName)`
  color: ${(props) => props.theme.main};
`;

export const StyledProductCategoryName = styled.span`
  color: ${(props) => props.theme.darkGray};
  display: block;
  font-size: 0.7rem;
  text-transform: capitalize;
`;
