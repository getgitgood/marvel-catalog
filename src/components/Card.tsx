import { styled } from 'styled-components';
import { Comic } from '../types';
import { Link } from 'react-router-dom';
import getImageSrc from '../utils/getImageSrc';

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCard = styled(Link)`
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
  const { images, id, title } = cardData;
  const imageSrc = getImageSrc(images);

  return (
    <StyledCardWrapper>
      <StyledCard className="card_link" to={String(id)}>
        <img
          className="card_image"
          src={imageSrc}
          alt={`${title} comic image`}
        />
      </StyledCard>
    </StyledCardWrapper>
  );
}
