import { Link } from 'react-router-dom';
import { StyledErrorPage } from './ErrorPage';

export default function NotFoundPage() {
  return (
    <StyledErrorPage>
      <h1 className={'error_title'}>404.</h1>
      <p className={'error_description'}>
        Запрашиваемая Вами страница не существует!
      </p>
      <Link className={'home_button'} to={'/'}>
        К каталогу
      </Link>
    </StyledErrorPage>
  );
}
