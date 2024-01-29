import { styled } from 'styled-components';
import { ContentProps } from '../types';
import { Card } from './index';
import { Outlet } from 'react-router-dom';
import NoResultsPage from '../pages/NoResultsPage';
import ErrorPage from '../pages/ErrorPage';

export const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  gap: 1em;
  justify-content: space-around;
  padding: 1em 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export default function Content({
  data,
  notFoundMessage,
  isError
}: ContentProps) {
  if (isError) {
    return <ErrorPage message={'Произошла ошибка!'} />;
  }
  if (data) {
    const { results } = data;
    return (
      <StyledContent>
        {results.length ? (
          <StyledGrid>
            {results.map((cardData) => (
              <Card {...{ cardData }} key={cardData.id} />
            ))}
            <Outlet context={{ results }} />
          </StyledGrid>
        ) : (
          <NoResultsPage notFoundMessage={notFoundMessage} />
        )}
      </StyledContent>
    );
  }
}
