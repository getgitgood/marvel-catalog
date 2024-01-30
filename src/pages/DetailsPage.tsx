import { MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import exitImg from '../assets/img/exit.svg';
import { Details } from '../components';
import { useAppSelector, useResults } from '../hooks';
import { ButtonsStateProps } from '../types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledDetails = styled.section`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.5s ease-in-out;

  .close-btn {
    position: absolute;
    z-index: 100;
    cursor: pointer;
    width: 2.5em;
    height: 2.5em;
    background: no-repeat url(${exitImg});
    background-size: 100%;
    align-self: flex-end;
    &:hover {
      background-color: initial;
    }
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip:hover::before {
    content: '${({ theme }) => theme.tooltipText}';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 0.4em;
    white-space: nowrap;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .tooltip::before {
    content: '';
    position: absolute;
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    padding: 0.4em;
    border-radius: ${({ theme }) => theme.borderRadius};
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
`;

export default function DetailsPage() {
  const { results } = useResults();
  const params = useParams();
  const { id } = params;
  const { purchasedCards, favoriteCards, isAuthenticated } = useAppSelector(
    (state) => state.project
  );

  const [buttonsState, setButtonsState] = useState<ButtonsStateProps>({
    isPurchaseAllowed: isAuthenticated,
    isFavoritesAllowed: isAuthenticated,
    isFavoriteAdded: !!favoriteCards.find((card) => card.id === Number(id)),
    isPurchased: !!purchasedCards.find((card) => card.id === Number(id))
  });

  const currentCard = results.find((card) => card.id === Number(id));

  const navigation = useNavigate();

  useEffect(() => {
    setButtonsState((prev) => ({
      ...prev,
      isFavoriteAdded: !!favoriteCards.find((card) => card.id === Number(id)),
      isPurchased: !!purchasedCards.find((card) => card.id === Number(id))
    }));
  }, [id, favoriteCards, purchasedCards]);

  const navigateBack = (e: MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    if (e.target === e.currentTarget) {
      navigation('..');
    }
  };

  if (currentCard) {
    return (
      <StyledDetails onClick={navigateBack}>
        <Details
          {...{
            setButtonsState,
            currentCard,
            buttonsState,
            isAuthenticated,
            navigateBack
          }}
        />
      </StyledDetails>
    );
  }
}
