import styled from 'styled-components';
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart.svg'

const Button = styled.button`
  background-color: transparent;  
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;

  svg {
    path {
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