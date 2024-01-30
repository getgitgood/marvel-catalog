import { useEffect, useState } from 'react';
import { Content, Form, Input, Pagination } from '../components';
import { useAppSelector } from '../hooks';
import {
  Comic,
  PaginationStateProps,
  ProjectSlice,
  UserCollectionProps
} from '../types';

export default function UserCollectionPage({
  collectionName
}: UserCollectionProps) {
  const [comicsTitle, setComicsTitle] = useState('');
  const purchasedCards = useAppSelector(
    (state) => state.project[collectionName as keyof ProjectSlice] as Comic[]
  );

  const [paginationState, setPaginationState] = useState<PaginationStateProps>({
    limit: 8,
    offset: 0,
    total: purchasedCards.length
  });

  const { limit, offset } = paginationState;

  const [currentPageItems, setCurrentPageItems] = useState(
    purchasedCards.slice(offset, offset + limit)
  );

  const noResultsMessage = 'В этой коллекции пока ничего нет!';

  useEffect(() => {
    const filteredItems = purchasedCards.filter(({ title }) =>
      title.toLowerCase().includes(comicsTitle.toLowerCase().replace(' ', '-'))
    );

    setCurrentPageItems(filteredItems.slice(offset, offset + limit));

    setPaginationState((prev) => ({
      ...prev,
      total: filteredItems.length
    }));
  }, [comicsTitle, purchasedCards, limit, offset]);

  const data = {
    results: currentPageItems,
    pagination: paginationState
  };

  const [inputId, placeholder] = ['search', 'Искать в коллекции'];

  return (
    <>
      <Form>
        <Input
          {...{
            inputId,
            placeholder,
            setComicsTitle
          }}
        />
      </Form>
      <Content {...{ data, limit, setPaginationState, noResultsMessage }} />
      <Pagination
        key={comicsTitle}
        pagination={data.pagination}
        {...{ setPaginationState }}
      />
    </>
  );
}
