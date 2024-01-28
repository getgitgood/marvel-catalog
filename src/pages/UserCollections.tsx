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

  return (
    <>
      <div>
        <Input
          {...{
            inputId: 'search',
            placeholder: 'Искать в коллекции',
            setComicsTitle
          }}
        />
      </div>
      <Content {...{ data, limit, setPaginationState }} />
      <Pagination
        key={comicsTitle}
        pagination={data.pagination}
        {...{ setPaginationState }}
      />
    </>
  );
}
