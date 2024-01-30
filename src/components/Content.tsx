import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { InfoPage } from '../pages/';
import { ContentProps } from '../types';
import { handleCardMove } from '../utils/helpers';
import { Card, CardsSkeleton } from './index';

const StyledContent = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`;

const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  gap: 1em;
  justify-content: space-around;
  padding: 1em 0;
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export default function Content(props: ContentProps) {
  const { data, isError, isFetching, noResultsMessage, limit } = props;
  const [cardMoveIncrement, setCardMoveIncrement] = useState(1);

  if (isError) {
    return <InfoPage isError={isError} message={'Произошла ошибка!'} />;
  }

  const results = data?.results;

  if (!results?.length && !isFetching) {
    return <InfoPage message={noResultsMessage} />;
  }

  return (
    <StyledContent>
      <StyledGridContent>
        {isFetching && <CardsSkeleton limit={limit} />}
        {results && (
          <>
            {results.map((cardData) => (
              <Card
                $cardMoveDirection={cardMoveIncrement}
                cardData={cardData}
                to={`${cardData.id}`}
                key={cardData.id}
                onMouseMove={(e) => handleCardMove(e, setCardMoveIncrement)}
              />
            ))}
            <Outlet context={{ results }} />
          </>
        )}
      </StyledGridContent>
    </StyledContent>
  );
}
