import { FormEvent, useState } from 'react';
import { Input, Pagination } from '../components';
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

  const noResultsMessage = 'По вашему запросу ничего не найдено!';

  const [id, placeholder, buttonText] = ['search', 'Название комикса', 'Найти'];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const { value } = elements.namedItem(id) as HTMLInputElement;
    setTitle(value);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input {...{ id, placeholder }} />
        <button>{buttonText}</button>
      </Form>

      <Content
        {...{
          data,
          isFetching,
          limit,
          isError,
          setPaginationState,
          noResultsMessage
        }}
      />

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
