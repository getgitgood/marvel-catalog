import { FormEvent, useState } from 'react';
import { CardsSkeleton, Input, Pagination } from '../components';
import { Content, Form } from '../components';
import { useGetComicsByTitleQuery } from '../features/apiSlice';
import { PaginationStateProps } from '../types';

export default function CatalogPage() {
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
