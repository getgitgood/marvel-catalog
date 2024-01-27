import { styled } from 'styled-components';
import { ContentProps } from '../types';
import { Card } from './index';
import { Outlet } from 'react-router-dom';

export const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`;

export const StyledGrid = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  gap: 1em;
  justify-content: space-around;
  padding: 1em 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export default function Content({ data, isError = false }: ContentProps) {
  if (isError) {
    return <p>Error!</p>;
  }

  if (data) {
    const { results } = data;
    return (
      <StyledContent>
        <StyledGrid>
          {results.map((cardData) => (
            <Card {...{ cardData }} key={cardData.id} />
          ))}
          <Outlet context={{ results }} />
        </StyledGrid>
      </StyledContent>
    );
  }
}
