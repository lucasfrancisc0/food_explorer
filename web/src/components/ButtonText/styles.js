import styled from "styled-components";

export const Container = styled.button`
  width: max-content;

  display: flex;
  gap: .8rem;
  justify-content: center;
  align-items: center;

  padding: .4rem 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border-radius: 2rem;
  border: none;

  font-weight: 500;
  font-size: 1.4rem;

  cursor: pointer;
`;