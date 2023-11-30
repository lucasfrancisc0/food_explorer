import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  padding: 1.2rem 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;


  font-size: 1.4rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  cursor: pointer;

  > svg{
    font-size: 22px;
  }
`;