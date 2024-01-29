import Form from '../components/Form';
import { useGetComicsByTitleQuery } from '../features/apiSlice';
import Content from '../components/Content';
import { FormEvent, useState } from 'react';
import { PaginationStateProps } from '../types';
import CardsSkeleton from '../components/CardsSkeleton';
import Pagination from '../components/Pagination';
import { Input } from '../components';

export default function Catalog() {
  const [title, setTitle] = useState('');
  const [paginationState, setPaginationState] = useState<PaginationStateProps>({
    limit: 20,
    offset: 0,
    total: 0
  });

  const { limit, offset } = paginationState;

  const { data, isFetching, isError } = useGetComicsByTitleQuery({
    title,
    limit,
    offset
  });

  const notFoundMessage = 'По вашему запросу ничего не найдено!';

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
        <button>{buttonText}</button>
      </Form>
      {isFetching ? (
        <CardsSkeleton cardsNumber={limit} />
      ) : (
        <Content
          {...{
            data,
            isFetching,
            limit,
            isError,
            setPaginationState,
            notFoundMessage
          }}
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
