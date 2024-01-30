import { styled } from 'styled-components';
import { CardProps } from '../types';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '.';

export const StyledCard = styled(Link)<Pick<CardProps, '$cardMoveDirection'>>`
  padding: 0.5em;
  max-width: 25em;
  border-radius: 5px;
  box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.5);

  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    color: inherit;
    transform: perspective(1000px)
      rotateY(${(props) => props.$cardMoveDirection * 10}deg);
  }

  .card_wrapper {
    position: relative;
    display: inline-block;
    height: 100%;
  }

  .card_not-in-stoke {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: 700;
    background-color: rgba(128, 128, 128, 0.5);

    &::after {
      position: absolute;
      content: 'Нет в наличии';
      font-size: 2em;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.fhd}) {
    max-width: 20em;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 17em;
  }

  .card_image {
    cursor: pointer;
    user-select: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default function Card(props: CardProps) {
  const { cardData, ...restProps } = props;
  const { images, title, prices } = cardData;
  const isInStoke = prices.some(({ price }) => price > 0);

  return (
    <StyledCard {...restProps}>
      <div className="card_wrapper">
        {!isInStoke && <div className="card_not-in-stoke" />}
        <ImageWithFallback className={'card_image'} {...{ title, images }} />
      </div>
    </StyledCard>
  );
}
