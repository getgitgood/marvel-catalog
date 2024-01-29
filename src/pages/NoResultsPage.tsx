import styled from 'styled-components';
import { NoResultsPageProps } from '../types';

const StyledNoResults = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  * {
    padding-bottom: 1rem;
  }

  .no-results_title {
    font-size: 3rem;
  }
`;

export default function NoResultsPage({ notFoundMessage }: NoResultsPageProps) {
  return (
    <StyledNoResults>
      <h2 className={'no-results_title'}>{notFoundMessage}</h2>
    </StyledNoResults>
  );
}
