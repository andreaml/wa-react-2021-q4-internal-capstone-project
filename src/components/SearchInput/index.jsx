import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search.svg'

const Wrapper = styled.form`
  align-items: center;
  color: black;
  display: flex;
  justify-content: space-between;
  top: 0;
`

const Input = styled.input`
  height: 30px;
  width: 150px;
`

const Button = styled.button`
  background-color: transparent;  
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
`

const SearchInput = () => {
  return (
    <Wrapper onSubmit={(e) => { e.preventDefault()}}>
      <Input type='text' />
      <Button type='submit'><img src={SearchIcon} alt="Search icon" /></Button>
    </Wrapper>
  )
}

export default SearchInput;