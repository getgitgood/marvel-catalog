import { styled } from 'styled-components';
import { ContentProps } from '../types';
import { Loader, Card } from './index';
import { Outlet } from 'react-router-dom';

const StyledContent = styled.section`
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
  isError = false,
  // error = undefined,
  isFetching = false
}: ContentProps) {
  if (isError) {
    return <p>Error!</p>;
  }

  if (isFetching) {
    return <Loader />;
  }

  if (data) {
    const { results } = data;
    return (
      <StyledContent>
        {results.map((cardData) => (
          <Card {...{ cardData }} key={cardData.id} />
        ))}
        <Outlet context={{ results }} />
      </StyledContent>
    );
  }
}
