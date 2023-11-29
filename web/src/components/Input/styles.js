import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: .8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  padding: 1.2rem .8rem;
  border-radius: 0.8rem;

  > input {
    width: 100%;

    background: none;
    outline: none;
    border: none;

    font-family: ${({ theme }) => theme.FONT_FAMILY.MAIN_TITLE};

  }

  input::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;