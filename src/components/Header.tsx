import { ButtonLink, Container } from "./styles";

export function Header() {
  return (
    <Container>
      <ButtonLink to="/Acima10">Com frete grátis</ButtonLink>
      <ButtonLink to="/">Sem frete grátis</ButtonLink>
    </Container>
  )
}
