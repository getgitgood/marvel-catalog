import { MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import exitImg from '../assets/img/exit.svg';
import { Prices } from '../components/index';
import { useAppDispatch, useAppSelector, useResults } from '../hooks';
import getImageSrc from '../utils/getImageSrc';
import { ButtonsStateProps } from '../types';
import {
  addToFavoriteCards,
  addToPurchasedCards,
  removeFromFavoriteCards
} from '../features/projectSlice';

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

  .details_wrapper {
    position: absolute;
    background: ${({ theme }) => theme.golden};
    color: ${({ theme }) => theme.black};
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${({ theme }) => theme.desktop}) {
      width: 40%;
    }

    @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
      width: 60%;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

  .details_close-btn {
    position: absolute;
    z-index: 100;
    cursor: pointer;
    width: 2em;
    height: 2em;
    background: no-repeat url(${exitImg});
    background-size: 100%;
    align-self: flex-end;
    &:hover {
      background-color: none;
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

  .details_sticky-wrapper {
    position: sticky;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 3.5em 3em;
    width: 100%;
    overflow-y: auto;

    @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
      padding: 1.5em 1em;
    }

    .details_title {
      padding: 0 1em;
    }

    .details_image {
      width: 60%;
      height: auto;
    }

    .details_description {
      text-align: justify;
    }

    .details_buttons {
      display: inline-flex;
      gap: 0.5em;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default function Details() {
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

  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const navigateBack = (e: MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    if (e.target === e.currentTarget) {
      navigation('..');
    }
  };

  const purchaseButtonHandler = () => {
    dispatch(addToPurchasedCards(currentCard));
    setButtonsState((prev) => ({
      ...prev,
      isPurchased: true,
      isPurchaseAllowed: false
    }));
  };

  useEffect(() => {
    setButtonsState((prev) => ({
      ...prev,
      isFavoriteAdded: !!favoriteCards.find((card) => card.id === Number(id)),
      isPurchased: !!purchasedCards.find((card) => card.id === Number(id))
    }));
  }, [id, favoriteCards, purchasedCards]);

  const addToFavoritesButtonHandler = () => {
    if (!buttonsState.isFavoriteAdded) {
      dispatch(addToFavoriteCards(currentCard));
    } else {
      dispatch(removeFromFavoriteCards(currentCard));
    }
  };

  if (currentCard) {
    const { images, prices, title, description } = currentCard;
    const imageSrc = getImageSrc(images);

    return (
      <StyledDetails onClick={navigateBack}>
        <div className={`details_wrapper`}>
          <div className={`details_sticky-wrapper`}>
            <a onClick={navigateBack} className={'details_close-btn'} />
            <h2 className="details_title">{title}</h2>
            <img
              className="details_image"
              src={imageSrc}
              alt={`${title} comic image`}
            />
            <h3>Описание:</h3>
            <p className="details_description">
              {description || 'Описание не найдено'}
            </p>
            <Prices {...{ prices, setButtonsState }} />
            <div className="details_buttons">
              <button
                onClick={purchaseButtonHandler}
                className={!isAuthenticated ? 'tooltip' : ''}
                disabled={
                  !buttonsState.isPurchaseAllowed || buttonsState.isPurchased
                }
              >
                {buttonsState.isPurchased && isAuthenticated
                  ? 'В коллекции'
                  : 'Приобрести'}
              </button>
              <button
                disabled={!buttonsState.isFavoritesAllowed}
                onClick={addToFavoritesButtonHandler}
                className={!isAuthenticated ? 'tooltip' : ''}
              >
                {buttonsState.isFavoriteAdded && isAuthenticated
                  ? 'Удалить из избранного'
                  : 'В избранное'}
              </button>
            </div>
          </div>
        </div>
      </StyledDetails>
    );
  }
}
