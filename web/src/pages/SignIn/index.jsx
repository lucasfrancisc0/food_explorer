import { Container, Brand, Form, Title, Section } from "./styles";

import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Envelope, Lock, ArrowLeft } from "@phosphor-icons/react";


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
          <h3>Faça seu login</h3>

          <Form>
            <Input
              icon={Envelope}
              placeholder="E-mail"
              type="email"
              autoComplete="email"
            />

            <Input
              icon={Lock}
              placeholder="Senha"
              type="password"
              autoComplete="password"
            />

            <Button
              title="Entrar"
            />

          </Form>

          <ButtonText
            icon={ArrowLeft}
            title="Criar uma conta"
          />
        </Section>
      </main>

    </Container>
  )
};