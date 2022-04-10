import styled from 'styled-components';
import SearchInput from '../SearchInput';
import SimpleLink from '../SimpleLink';
import logo from './../../logo.png';
import ShoppingCartButton from './ShoppingCartButton';

const Wrapper = styled.nav`
  align-items: center;
  background: white;
  color: black;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 20px 50px;
  position: sticky;
  top: 0;
  width: 100%;
`

const Logo = styled.img`
  display: block;
  height: fit-content;
  width: 150px;
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`
const ListItem = styled.li`
  margin: 0 10px;
`

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Deco Choice" title='Deco Choice' />
      <List>
        <ListItem><SimpleLink uppercase href='#' title='Categories'>Categories</SimpleLink></ListItem>
        <ListItem><SimpleLink uppercase href='#' title='Sale'>Sale</SimpleLink></ListItem>
      </List>
      <List>
        <ListItem><SearchInput /></ListItem>
        <ListItem><ShoppingCartButton /></ListItem>
      </List>
    </Wrapper>
  )
}

export default Header;