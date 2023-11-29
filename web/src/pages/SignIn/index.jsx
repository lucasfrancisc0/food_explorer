import { Container, Brand, Form, Title, Section } from "./styles";

import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";


export function SignIn() {
  return(
    <Container>

      <main>

        <Title>
          <Brand>
          <h1>Food explorer</h1>
          <img src={logo} alt="Logotipo Food explorer"/>
          </Brand>

          <h2>Login</h2>
        </Title>

        <Section>
          <Form>
            <h3>Faça seu login</h3>
            <Input
              
              placeholder="E-mail"
              type="email"
              autoComplete="email"
            />
          </Form>
        </Section>

      </main>

    </Container>
  )
};