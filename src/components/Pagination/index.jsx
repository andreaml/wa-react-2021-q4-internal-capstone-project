import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledNavigationButton,
  StyledPaginationButton,
  StyledWrapper,
} from './styled';

function Pagination({ page, totalPages, setPage }) {
  const navigateToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const generatePagesButtons = () => {
    const pagesButtonsArray = [];
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
      pagesButtonsArray.push(
        <StyledPaginationButton
          key={`pagination-button-${pageNumber}`}
          type="button"
          activePage={page === pageNumber}
          onClick={() => {
            navigateToPage(pageNumber);
          }}
        >
          {' '}
          {pageNumber}{' '}
        </StyledPaginationButton>
      );
    }
    return pagesButtonsArray;
  };

  return (
    <StyledWrapper>
      <StyledNavigationButton
        type="button"
        title="Previous"
        disabled={totalPages === 1 || page === 1}
        onClick={() => {
          navigateToPage(page - 1);
        }}
      >
        {' '}
        &lt;{' '}
      </StyledNavigationButton>
      {generatePagesButtons()}
      <StyledNavigationButton
        type="button"
        title="Next"
        disabled={page === totalPages}
        onClick={() => {
          navigateToPage(page + 1);
        }}
      >
        {' '}
        &gt;{' '}
      </StyledNavigationButton>
    </StyledWrapper>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
