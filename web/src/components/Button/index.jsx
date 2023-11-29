import { Container } from "./styles";

export function Button({ icon : Icon, title, loading = false, ...rest}){
  return(
    <Container
      type="submit"
      {...rest}
      disabled={loading}
    >
      {
        Icon && <Icon/>
      }

      {
        loading ? 'Carregando' : 'Entrar'
      }

    </Container>
  );
}