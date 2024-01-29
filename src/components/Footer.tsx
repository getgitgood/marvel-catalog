import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};
  height: 1.5em;
  padding: 1.5em;
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>2024. Все права принадлежат правообладателям.</span>
    </StyledFooter>
  );
}
