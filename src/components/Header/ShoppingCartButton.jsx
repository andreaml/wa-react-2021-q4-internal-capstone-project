import styled from 'styled-components';
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart.svg'

const Button = styled.button`
  background-color: transparent;  
  border: 0;
  cursor: pointer;
  height: 30px;
  padding: 0 5px;
  width: 30px;

  svg {
    height: 100%;
    width: 100%;
    
    path {
      transition: all 0.3s ease;
    }
  } 

  &:hover {
    svg path {
      fill: ${props => props.theme.main};
    }
  }
`

const ShoppingCartButton = () => {
  return (
    <Button type='button'>
      <ShoppingCartIcon />
      {/* <img src={ShoppingCartIcon} alt="Shopping cart icon" /> */}
    </Button>
  )
}

export default ShoppingCartButton;