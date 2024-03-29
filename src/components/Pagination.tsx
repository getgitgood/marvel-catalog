import { useEffect, useState } from 'react';
import { PaginationProps, PaginationStateProps } from '../types';
import ReactPaginate from 'react-paginate';
import { styled } from 'styled-components';

const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
  width: fit-content;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 0.8em;
  }

  .pagination_wrapper {
    display: inline-flex;
    gap: 1em;
  }

  li {
    > a {
      padding: 0.5em;
      color: ${({ theme }) => theme.black};
      border-radius: ${({ theme }) => theme.borderRadius};
      background: ${({ theme }) => theme.golden};
    }
  }

  .selected > a {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.lightgrey};
  }
`;

export default function Pagination({
  pagination,
  setPaginationState
}: PaginationProps<PaginationStateProps>) {
  const { limit, total } = pagination;

  const [itemsOffset, setItemsOffset] = useState(0);

  const pageCount = Math.ceil(total / limit);

  const handlePageChange = ({ selected }: { selected: number }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newOffset = selected * limit;
    setItemsOffset(newOffset);
  };

  useEffect(() => {
    setPaginationState((prev) => ({
      ...prev,
      offset: itemsOffset
    }));
  }, [itemsOffset, setPaginationState]);

  return (
    <StyledPagination>
      <ReactPaginate
        breakLabel={'...'}
        previousLabel="<"
        nextLabel={'>'}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className={'pagination_wrapper'}
        marginPagesDisplayed={2}
      />
    </StyledPagination>
  );
}
