import { styled } from 'styled-components';
import Form from '../components/Form';
import { useGetComicsByTitleQuery } from '../features/apiSlice';
import Content from '../components/Content';
import { useState } from 'react';

const Section = styled.section`
  height: 100%;
`;

export default function Catalog() {
  const [currentSearch, setCurrentSearch] = useState('');
  const { data, isFetching, isError, error } =
    useGetComicsByTitleQuery(currentSearch);
  return (
    <Section>
      <Form
        {...{
          inputId: 'search',
          htmlFor: 'search',
          buttonText: 'Найти',
          placeholder: 'Название комикса',
          setCurrentSearch
        }}
      />
      <Content {...{ data, isFetching, isError, error }} />
    </Section>
  );
}
