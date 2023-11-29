import styled from "styled-components";
import {DEVICE_BREACKPOINTS } from "../../styles/deviceBreackpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  > main {
    width: 34.7rem;
    min-width: 25rem;

    @media (min-width: ${DEVICE_BREACKPOINTS.MD}) {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      gap: 1.8rem;
    }
  }
`;

export const Title = styled.div`
  width: 100%;

  margin-bottom: 7.2rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    font-family: ${({ theme }) => theme.FONT_FAMILY.MAIN_TITLE}; 
    font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
    font-weight: 700;

    margin-top: 1.4rem;
  }

  @media (min-width: ${DEVICE_BREACKPOINTS.MD}) {
    width: 34.7rem;
    margin-bottom: 0;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
    font-weight: 700;
  }

  @media (max-width: ${DEVICE_BREACKPOINTS.SM}) {
    > h1 {
      font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE}
    }
  }

`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE};
    font-weight: 500;

    display: none;
  }  

  @media (min-width: ${DEVICE_BREACKPOINTS.MD}) {
    width: 35.6rem;

    background-color: ${(({ theme }) => theme.COLORS.DARK_700)};

    border-radius: 1.6rem;
    padding: 4.8rem;

    > h3 {
      display: block;
    }
  };

  @media (min-width: ${DEVICE_BREACKPOINTS.LG}) {
    width: 47.5rem;
  };

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
