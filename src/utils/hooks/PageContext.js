import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

export const PageContext = createContext('homepage');

export function PageProvider({ page, children }) {
  const [currentPage, setCurrentPage] = useState(page);

  const pageContextValue = useMemo(
    () => ({ page: currentPage, setCurrentPage }),
    [currentPage]
  );

  return (
    <PageContext.Provider value={pageContextValue}>
      {children}
    </PageContext.Provider>
  );
}

PageProvider.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export const usePage = () => {
  const value = useContext(PageContext);
  return value;
};
