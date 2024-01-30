import { styled } from 'styled-components';
import { Button, ImageWithFallback, Prices } from '.';
import { Link } from 'react-router-dom';
import { ButtonsStateProps, DetailsProps } from '../types';
import { useAppDispatch } from '../hooks';
import {
  addToFavoriteCards,
  addToPurchasedCards,
  removeFromFavoriteCards
} from '../features/projectSlice';

const DetailsWrapper = styled.div`
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
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  padding: 3.5em 3em;
  width: 100%;
  overflow-y: auto;

  @media only screen and (max-width: ${({ theme }) => theme.laptop}) {
    padding: 1.5em 1em;
  }

  h2 {
    padding: 0 1em;
  }

  .details_image {
    width: 60%;
    height: auto;
  }
`;

const ButtonsWrapper = styled.div`
  display: inline-flex;
  gap: 0.5em;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 1em 1.5em;
  }
`;

export default function Details(props: DetailsProps<ButtonsStateProps>) {
  const {
    currentCard,
    buttonsState,
    navigateBack,
    isAuthenticated,
    setButtonsState
  } = props;
  const {
    isFavoritesAllowed,
    isPurchaseAllowed,
    isFavoriteAdded,
    isPurchased
  } = buttonsState;

  const dispatch = useAppDispatch();

  const purchaseButtonHandler = () => {
    dispatch(addToPurchasedCards(currentCard));
    setButtonsState((prev) => ({
      ...prev,
      isPurchased: true,
      isPurchaseAllowed: false
    }));
  };

  const { images, prices, title, description } = currentCard;
  const addToFavoritesButtonHandler = () => {
    if (!isFavoriteAdded) {
      dispatch(addToFavoriteCards(currentCard));
    } else {
      dispatch(removeFromFavoriteCards(currentCard));
    }
  };

  const favoriteBtnText =
    isFavoriteAdded && isAuthenticated
      ? 'Удалить из избранного'
      : 'В избранное';

  const purchaseBtnText =
    isPurchased && isAuthenticated ? 'В коллекции' : 'Приобрести';

  return (
    <DetailsWrapper>
      <StickyWrapper>
        <Link
          to={'#'}
          onClick={navigateBack}
          className={'details_btn close-btn'}
        />
        <h2>{title}</h2>

        <ImageWithFallback className={'details_image'} {...{ images, title }} />
        <h3>Описание:</h3>
        <p>{description || 'Описание не найдено'}</p>
        <Prices {...{ prices, setButtonsState }} />

        <ButtonsWrapper>
          {isAuthenticated && (
            <Button
              className="details_btn"
              onClick={purchaseButtonHandler}
              disabled={!isPurchaseAllowed || isPurchased}
              buttonText={purchaseBtnText}
            />
          )}

          <Button
            disabled={!isFavoritesAllowed}
            onClick={addToFavoritesButtonHandler}
            className={`${!isAuthenticated ? 'tooltip' : ''}`}
            buttonText={favoriteBtnText}
          />
        </ButtonsWrapper>
      </StickyWrapper>
    </DetailsWrapper>
  );
}
