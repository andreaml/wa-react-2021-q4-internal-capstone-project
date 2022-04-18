import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const Wrapper = styled.form`
  align-items: center;
  color: black;
  display: flex;
  height: 100%;
  justify-content: space-between;
  position: relative;
  top: 0;
  min-width: 30px;
  width: fit-content;
`;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid;
  height: 55px;
  max-width: 500px;
  opacity: 0;
  position: absolute;
  right: -5px;
  top: -11px;
  transition: all 0.2s linear;
  width: 0;

  ${({ expanded }) =>
    expanded &&
    css`
      opacity: 1;
      padding-left: 10px;
      padding-right: 40px;
      width: calc(80vw - 30px);
    `}
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 30px;
  padding: 0 5px;
  position: absolute;
  right: 0;
  top: calc(50% - 15px);
  width: 30px;

  svg path {
    transition: all 0.3s ease;
  }

  &:hover {
    svg path {
      fill: ${(props) => props.theme.main};
    }
  }
`;

function SearchInput() {
  const [inputIsExpanded, setInputIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  const toggleInputExpanded = () => {
    setInputIsExpanded((currentExpandedValue) => !currentExpandedValue);
  };

  const search = (e) => {
    e.preventDefault();
    toggleInputExpanded();
  };

  const triggerSearchClickAction = (e) => {
    if (!inputIsExpanded) {
      e.preventDefault();
      inputRef.current.focus();
      toggleInputExpanded();
    }
  };

  return (
    <Wrapper onSubmit={search}>
      <Input
        ref={inputRef}
        type="text"
        expanded={inputIsExpanded}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <Button
        type={inputIsExpanded ? 'submit' : 'button'}
        onClick={triggerSearchClickAction}
        title="Search"
      >
        <SearchIcon alt="Search icon" />
      </Button>
    </Wrapper>
  );
}

export default SearchInput;
