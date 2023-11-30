import { Container } from "./styles";
import { CircleNotch } from "@phosphor-icons/react"

export function Button({ icon : Icon, title, loading = false, ...rest}){
  return(
    <Container
      type="submit"
      {...rest}
      disabled={loading}
    >
      {
        loading ? <CircleNotch/> : Icon && <Icon/>
      }

      {
        loading ? 'Carregando...' : 'Entrar'
      }

    </Container>
  );
}