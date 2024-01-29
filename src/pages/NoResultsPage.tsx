import { NoResultsPageProps } from '../types';
import { StyledErrorPage } from './ErrorPage';

export default function NoResultsPage({ notFoundMessage }: NoResultsPageProps) {
  return (
    <StyledErrorPage>
      <h2 className={'no-results_title'}>{notFoundMessage}</h2>
    </StyledErrorPage>
  );
}
