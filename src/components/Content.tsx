import { styled } from 'styled-components';
import { ContentProps } from '../types';
import Loader from './Loader';
import Card from './Card';

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27em, 1fr));
  gap: 1em;
  justify-content: space-around;
  padding: 1em 0;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export default function Content({
  data,
  isError = false,
  // error = undefined,
  isFetching = false
}: ContentProps) {
  if (isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <p>Error!</p>;
  }
  if (data) {
    return (
      <StyledContent>
        {data.results.map((cardData) => (
          <Card {...{ cardData }} key={cardData.id} />
        ))}
      </StyledContent>
    );
  }
}
