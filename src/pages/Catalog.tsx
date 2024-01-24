import { styled } from 'styled-components';
import Form from '../components/Form';

const Section = styled.section`
  height: 100%;
`;

const Content = styled.div``;
export default function Catalog() {
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
