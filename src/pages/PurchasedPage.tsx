import { useEffect, useState } from 'react';
import { Content, Input } from '../components';
import Pagination from '../components/Pagination';
import { PaginationStateProps } from '../types';
import { useAppSelector } from '../hooks';

export default function PurchasedPage() {
  const [comicsTitle, setComicsTitle] = useState('');
  const { purchasedCards } = useAppSelector((state) => state.project);
  console.log(purchasedCards);
  const [paginationState, setPaginationState] = useState<PaginationStateProps>({
    limit: 5,
    offset: 0,
    total: purchasedCards.length
  });

  const { limit, offset } = paginationState;

  const [currentPageItems, setCurrentPageItems] = useState(
    purchasedCards.slice(offset, limit)
  );

  useEffect(() => {
    console.log(comicsTitle);
    setCurrentPageItems(
      purchasedCards.filter(({ title }) =>
        title
          .toLowerCase()
          .includes(comicsTitle.toLowerCase().replace(' ', '-'))
      )
    );
  }, [comicsTitle, purchasedCards]);

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
