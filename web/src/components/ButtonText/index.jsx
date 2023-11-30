import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, ...rest }){
  return(
    <Container
      {...rest}
      type="button"
    >

      {
        Icon && <Icon/>
      }

      {
        title
      }

    </Container>
  );
}