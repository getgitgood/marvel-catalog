import { keyframes, styled } from 'styled-components';
import { CardsSkeletonProps } from '../types';

const flash = keyframes`
  from, 0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
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
}`;

const SkeletonCard = styled.div`
  padding: 0.5em;
  max-width: 25em;
  width: 22em;
  height: 30em;
  border-radius: 5px;
  box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.5);

  background-color: rgba(0, 0, 0, 0.3);
  animation: ${flash} 3s ease-in infinite;

  @media screen and (max-width: ${({ theme }) => theme.fhd}) {
    max-width: 20em;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 17em;
  }
`;

export default function CardsSkeleton({ limit = 20 }: CardsSkeletonProps) {
  const cards = Array.from({ length: limit }, (_, k) => (
    <SkeletonCard key={k + 1} />
  ));

  return cards;
}
