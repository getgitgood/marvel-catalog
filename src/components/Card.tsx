import { styled } from 'styled-components';
import { CardProps } from '../types';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '.';
import { MouseEvent, useState } from 'react';

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export type StyledCardProps = {
  $cardMoveDirection: number;
};

export const StyledCard = styled(Link)<StyledCardProps>`
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
  .content_wrapper {
    position: relative;
    display: inline-block;
  }

  .not_in_stoke {
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

export default function Card({ cardData }: CardProps) {
  const { images, id, title, prices } = cardData;
  const [cardMoveDirection, setCardMoveDirection] = useState(1);
  const isInStoke = prices.some(({ price }) => price > 0);

  const handleMouseHover = (e: MouseEvent<HTMLAnchorElement>) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const mouseX = clientX - left;
    const newDirection = mouseX > width / 2 ? 1 : -1;
    setCardMoveDirection(newDirection);
  };

  return (
    <StyledCardWrapper>
      <StyledCard
        className={'card_link'}
        to={String(id)}
        onMouseMove={(e) => handleMouseHover(e)}
        $cardMoveDirection={cardMoveDirection}
      >
        <div className="content_wrapper">
          {!isInStoke && <div className="not_in_stoke" />}
          <ImageWithFallback className={'card_image'} {...{ title, images }} />
        </div>
      </StyledCard>
    </StyledCardWrapper>
  );
}
