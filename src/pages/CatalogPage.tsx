import Form from '../components/Form';
import { useGetComicsByTitleQuery } from '../features/apiSlice';
import Content from '../components/Content';
import { FormEvent, useState } from 'react';
import { PaginationStateProps } from '../types';
import CardsSkeleton from '../components/CardsSkeleton';
import Pagination from '../components/Pagination';
import { Button, Input } from '../components';

export default function Catalog() {
  const [title, setTitle] = useState('');
  const [paginationState, setPaginationState] = useState<PaginationStateProps>({
    limit: 20,
    offset: 0,
    total: 0
  });

  const { limit, offset } = paginationState;

  const { data, isFetching, isError, error } = useGetComicsByTitleQuery({
    title,
    limit,
    offset
  });

  const [inputId, placeholder, buttonText] = [
    'search',
    'Название комикса',
    'Найти'
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const { value } = elements.namedItem(inputId) as HTMLInputElement;
    setTitle(value);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input {...{ inputId, placeholder }} />
        <Button {...{ buttonText }} />
      </Form>
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
