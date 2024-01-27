import { MouseEvent, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import exitImg from '../assets/img/exit.png';
import { Button, Prices } from '../components/index';
import { useAppDispatch, useAppSelector, useResults } from '../hooks';
import getImageSrc from '../utils/getImageSrc';
import { ButtonsStateProps } from '../types';
import { addToPurchasedCards } from '../features/projectSlice';

const StyledDetails = styled.section`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  color: red;
  background: rgba(0, 0, 0, 0.4);

  .details_wrapper {
    position: absolute;
    background: ${({ theme }) => theme.black};
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
    cursor: pointer;
    min-width: fit-content;
    background: no-repeat url(${exitImg});
    background-size: 100%;
    align-self: flex-end;
    background-color: white;
  }

  .details_sticky-wrapper {
    position: sticky;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 1.5em 1em 3em;
    width: 100%;
    overflow-y: auto;

    .details_title {
      padding: 0 1em;
    }

    .details_image {
      width: 60%;
      height: auto;
      // @media screen and (max-width: ${({ theme }) => theme.fhd}) {
      //   width: 80%;
      // }
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
  const [isHovered, setIsHovered] = useState(false);
  const { purchasedCards } = useAppSelector((state) => state.project);
  const [buttonsState, setButtonsState] = useState<ButtonsStateProps>({
    isPurchaseDisabled: false,
    isFavoriteAdded: false,
    isPurchased: !!purchasedCards.find((card) => card.id === Number(id))
  });

  const currentCard = results.find((card) => card.id === Number(id));

  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const navigateBack = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      navigation('..');
    }
  };

  const purchaseButtonHandler = () => {
    dispatch(addToPurchasedCards(currentCard));
    setButtonsState({
      ...buttonsState,
      isPurchased: true,
      isPurchaseDisabled: true
    });
  };

  const handleMouseOverDetails = () => {
    setIsHovered(true);
    document.body.style.overflow = 'hidden hidden';
    document.body.style.marginRight = '0';
  };

  const handleMouseLeaveDetails = () => {
    setIsHovered(false);
    document.body.style.overflow = 'hidden auto';
    document.body.style.marginRight = '-5px';
  };

  if (currentCard) {
    const { images, prices, title, description } = currentCard;
    const imageSrc = getImageSrc(images);

    return (
      <StyledDetails onClick={navigateBack}>
        <div className={`details_wrapper`}>
          <div
            className={`details_sticky-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseOverDetails}
            onMouseLeave={handleMouseLeaveDetails}
          >
            <Button onClick={navigateBack} className={'details_close-btn'} />
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
              <Button
                onClick={purchaseButtonHandler}
                buttonText={
                  buttonsState.isPurchased ? 'В коллекции' : 'Приобрести'
                }
                isDisabled={
                  buttonsState.isPurchaseDisabled || buttonsState.isPurchased
                }
              />
              <Button
                buttonText={
                  buttonsState.isFavoriteAdded
                    ? 'Удалить из избранного'
                    : 'В избранное'
                }
                isDisabled={buttonsState.isFavoriteAdded}
              />
            </div>
          </div>
        </div>
      </StyledDetails>
    );
  }
}
