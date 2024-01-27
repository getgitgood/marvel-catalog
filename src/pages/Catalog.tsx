import Form from '../components/Form';
import { useGetComicsByTitleQuery } from '../features/apiSlice';
import Content from '../components/Content';
import { useState } from 'react';
import { PaginationStateProps } from '../types';
import CardsSkeleton from '../components/CardsSkeleton';
import Pagination from '../components/Pagination';

export default function Catalog() {
  const [title, setTitle] = useState('');
  const [paginationState, setPaginationState] = useState<PaginationStateProps>({
    limit: 20,
    offset: 0
  });

  const { limit, offset } = paginationState;

  const { data, isFetching, isError, error } = useGetComicsByTitleQuery({
    title,
    limit,
    offset
  });

  return (
    <>
      <Form
        {...{
          inputId: 'search',
          htmlFor: 'search',
          buttonText: 'Найти',
          placeholder: 'Название комикса',
          setTitle
        }}
      />
      {isFetching ? (
        <CardsSkeleton cardsNumber={limit} />
      ) : (
        <Content
          {...{ data, isFetching, isError, error, limit, setPaginationState }}
        />
      )}
      {data?.pagination ? (
        <Pagination
          key={title}
          pagination={data.pagination}
          {...{ setPaginationState }}
        />
      ) : null}
    </>
  );
}
