import { styled } from 'styled-components';
import { StyledContent, StyledGrid } from './Content';
import { StyledCardWrapper } from './Card';

const SkeletonCard = styled.div`
  padding: 0.5em;
  max-width: 25em;
  width: 22em;
  height: 30em;
  border-radius: 5px;
  box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.5);

  background-color: rgba(0, 0, 0, 0.3);
  animation: flash 3s ease-in infinite;
  @media screen and (max-width: ${({ theme }) => theme.fhd}) {
    max-width: 20em;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 17em;
  }

  @-webkit-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }

  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }
`;

export type CardsSkeletonProps = {
  cardsNumber?: number;
};

export default function CardsSkeleton({
  cardsNumber = 20
}: CardsSkeletonProps) {
  const cards = [];
  for (let i = 0; i < cardsNumber; i += 1) {
    cards.push(
      <StyledCardWrapper key={i}>
        <SkeletonCard key={i + 1} />
      </StyledCardWrapper>
    );
  }
  return (
    <StyledContent>
      <StyledGrid>{cards}</StyledGrid>
    </StyledContent>
  );
}
