import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button, FormComponent, Input } from '../components';
import { updateUserStatus } from '../features/projectSlice';
import { useAppDispatch } from '../hooks';

const StyledAuth = styled.section`
  display: flex;
  align-self: center;
  justify-content: center;
  flex: 1 0 auto;
  .form_wrapper {
    background-color: ${({ theme }) => theme.lightgrey};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 2em;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > form {
      flex-direction: column;
      gap: 2em;
    }
  }
`;

export default function AuthPage() {
  const [
    usernameInputId,
    usernameLabel,
    usernamePlaceholder,
    passwordInputId,
    passwordLabel,
    passwordPlaceholder,
    buttonText
  ] = [
    'username',
    'Введите Ваш логин',
    'Ваш логин',
    'password',
    'Введите пароль',
    'Ваш пароль',
    'Войти'
  ];

  const [error, setError] = useState<Error | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = {
      username: import.meta.env.VITE_LOGIN,
      password: import.meta.env.VITE_PASSWORD
    };

    const { elements } = e.currentTarget;
    const { value: usernameValue } = elements.namedItem(
      usernameInputId
    ) as HTMLInputElement;
    const { value: passwordValue } = elements.namedItem(
      passwordInputId
    ) as HTMLInputElement;

    try {
      if (
        credentials.username === usernameValue &&
        credentials.password === passwordValue
      ) {
        dispatch(updateUserStatus(true));
        setError(null);
        navigate('/');
      } else {
        throw new Error('Пользователь не найден!');
      }
    } catch (e) {
      setError(e as Error);
    }
  };

  return (
    <StyledAuth>
      <div className="form_wrapper">
        <FormComponent onSubmit={onSubmit}>
          <Input
            id={usernameInputId}
            labelText={usernameLabel}
            placeholder={usernamePlaceholder}
          />
          <Input
            id={passwordInputId}
            labelText={passwordLabel}
            placeholder={passwordPlaceholder}
            type="password"
          />
          <Button buttonText={buttonText} />
        </FormComponent>
        {error && <p>{error.message}</p>}
      </div>
    </StyledAuth>
  );
}
