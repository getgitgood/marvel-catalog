import { styled } from 'styled-components';
import Form from '../components/Form';
import { useGetComicByTitleQuery } from '../features/apiSlice';

const Section = styled.section`
  height: 100%;
`;

const Content = styled.div``;
export default function Catalog() {
  const { data, isFetching, isError, error } = useGetComicByTitleQuery('hulk');
  return (
    <Section>
      <Form
        {...{
          inputId: 'search',
          htmlFor: 'search',
          buttonText: 'Найти',
          placeholder: 'Название комикса'
        }}
      />
      <Content />
    </Section>
  );
}
