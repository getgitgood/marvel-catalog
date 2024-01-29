import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ErrorPageProps } from '../types';

export const StyledErrorPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  * {
    padding-bottom: 1rem;
  }
`;

export default function ErrorPage({ message }: ErrorPageProps) {
  return (
    <StyledErrorPage>
      <h2 className={'error_title'}>ПРОИЗОШЛА ОШИБКА!</h2>

      {message ? (
        <>
          <h2 className={'error_message'}>Описание:</h2>
          <h3 className={'error_description'}>{message} </h3>
        </>
      ) : (
        <h3 className={'error_message'}>Произошла неизвестная ошибка!</h3>
      )}

      <Link className={'home_button'} to={'/'}>
        К каталогу.
      </Link>
    </StyledErrorPage>
  );
}
