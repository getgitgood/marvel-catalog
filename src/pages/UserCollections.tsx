import { useState, useEffect } from 'react';
import { useAppSelector } from '../hooks';
import {
  Comic,
  PaginationStateProps,
  ProjectSlice,
  UserCollectionProps
} from '../types';
import Content from '../components/Content';
import Input from '../components/Input';
import Pagination from '../components/Pagination';
import { FormComponent } from '../components';

export default function UserCollections({
  collectionName
}: UserCollectionProps) {
  const [comicsTitle, setComicsTitle] = useState('');
  const purchasedCards = useAppSelector(
    (state) => state.project[collectionName as keyof ProjectSlice] as Comic[]
  );

  const [paginationState, setPaginationState] = useState<PaginationStateProps>({
    limit: 5,
    offset: 0,
    total: purchasedCards.length
  });

  const { limit, offset } = paginationState;

  const [currentPageItems, setCurrentPageItems] = useState(
    purchasedCards.slice(offset, offset + limit)
  );

  const notFoundMessage = 'В этой коллекции пока ничего нет!';

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
      <FormComponent>
        <Input
          {...{
            inputId,
            placeholder,
            setComicsTitle
          }}
        />
      </FormComponent>
      <Content {...{ data, limit, setPaginationState, notFoundMessage }} />
      <Pagination
        key={comicsTitle}
        pagination={data.pagination}
        {...{ setPaginationState }}
      />
    </>
  );
}
