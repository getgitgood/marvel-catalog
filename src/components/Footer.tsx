import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};
  height: 1.5em;
  padding: 1.5em;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 0.6em;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>2024. Все права принадлежат правообладателям.</span>
    </StyledFooter>
  );
}
