import { styled } from 'styled-components';
import { CardData } from '../types';
import { Link } from 'react-router-dom';
import getImageSrc from '../utils/getImageSrc';

const StyledCard = styled(Link)`
  display: flex;
  justify-content: center;
  .card_image {
    padding: 0.5em;
    box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    max-width: 25em;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 15em;
    }
  }
`;

export type CardProps = {
  cardData: CardData;
};

export default function Card({ cardData }: CardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { images, id } = cardData;
  // const { title, description, prices, images, id } = cardData;
  const imageSrc = getImageSrc(images);

  return (
    <StyledCard to={String(id)}>
      <img className="card_image" src={imageSrc} />
    </StyledCard>
  );
}
