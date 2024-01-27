import { styled } from 'styled-components';
import { Comic } from '../types';
import { Link } from 'react-router-dom';
import getImageSrc from '../utils/getImageSrc';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;

  .card_link {
    padding: 0.5em;
    max-width: 25em;
    border-radius: 5px;
    box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.5);
    @media screen and (max-width: ${({ theme }) => theme.fhd}) {
      max-width: 20em;
    }
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 17em;
    }
  }
  .card_image {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 100%;
  }
`;

export type CardProps = {
  cardData: Comic;
};

export default function Card({ cardData }: CardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { images, id, title } = cardData;
  // const { title, description, prices, images, id } = cardData;
  const imageSrc = getImageSrc(images);

  return (
    <StyledCard>
      <Link className="card_link" to={String(id)}>
        <img
          className="card_image"
          src={imageSrc}
          alt={`${title} comic image`}
        />
      </Link>
    </StyledCard>
  );
}
