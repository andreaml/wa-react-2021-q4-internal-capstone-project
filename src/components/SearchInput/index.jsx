import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { StyledButton, StyledInput, StyledWrapper } from './styled';

function SearchInput() {
  const [inputIsExpanded, setInputIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const toggleInputExpanded = () => {
    setInputIsExpanded((currentExpandedValue) => !currentExpandedValue);
  };

  const search = (e) => {
    e.preventDefault();
    toggleInputExpanded();
    if (searchValue.trim().length > 0) {
      navigate(`/search?q=${searchValue}`);
    }
  };

  const triggerSearchClickAction = (e) => {
    if (!inputIsExpanded) {
      e.preventDefault();
      inputRef.current.focus();
      toggleInputExpanded();
    }
  };

  return (
    <StyledWrapper onSubmit={search}>
      <StyledInput
        ref={inputRef}
        type="text"
        expanded={inputIsExpanded}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <StyledButton
        type={inputIsExpanded ? 'submit' : 'button'}
        onClick={triggerSearchClickAction}
        title="Search"
      >
        <SearchIcon alt="Search icon" />
      </StyledButton>
    </StyledWrapper>
  );
}

export default SearchInput;
