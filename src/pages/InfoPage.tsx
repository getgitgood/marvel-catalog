import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { InfoPageProps } from '../types';

export const StyledInfoPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1 1 auto;

  h2 {
    font-size: 4rem;
  }

  .home_button {
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 3rem;
    background-color: ${({ theme }) => theme.red};
  }
`;

export default function InfoPage(props: InfoPageProps) {
  const { message, isError } = props;
  return (
    <StyledInfoPage>
      {isError ? (
        <>
          <h2>ПРОИЗОШЛА ОШИБКА!</h2>
          {message ? (
            <>
              <h3>Описание:</h3>
              <h3>{message}</h3>
            </>
          ) : (
            <h4>Произошла неизвестная ошибка!</h4>
          )}
          <Link className={'home_button'} to={'/'}>
            К каталогу
          </Link>
        </>
      ) : (
        <h2>{message}</h2>
      )}
    </StyledInfoPage>
  );
}
