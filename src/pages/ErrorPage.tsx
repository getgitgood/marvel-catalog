import { Link } from 'react-router-dom';
import { ErrorPageProps } from '../types';
import { styled } from 'styled-components';

const StyledErrorPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  * {
    padding-bottom: 1rem;
  }

  .error_title {
    font-size: 5rem;
  }

  .error_message {
    font-size: 2rem;
  }
  .error_description {
    font-size: 3rem;
    text-decoration: underline;
  }

  .home {
    padding: 2rem;
    font-size: 3rem;
    background-color: rgb(106, 53, 53);
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

      <Link className={'home'} to={'/'}>
        К каталогу.
      </Link>
    </StyledErrorPage>
  );
}
