import styled from "styled-components";
import BaseContainer from "./Container";
import { device } from "./Breakpoints";

const Container = styled(BaseContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.lg} {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media ${device.md} {
    gap: 1rem;
  }
`;

const CardStyled = styled.div`
  background: ${({ theme }) => theme.colors.backgroundVariant};
  padding: 2rem 4rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: transparent;
    cursor: default;
    border-color: ${({ theme }) => theme.colors.primaryVariant};
  }

  h3 {
    margin: 0;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  h4 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & > div {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;

    article {
      display: flex;
      gap: 1rem;
      align-items: baseline;

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    @media ${device.lg} {
      padding-left: 1rem;
    }
  }

  h3,
  h4,
  small {
    text-transform: capitalize;
  }

  @media ${device.lg} {
    width: 80%;
    padding: 2rem;
    marign: 0 auto;
  }

  @media ${device.md} {
      width: 100%;
      padding: 2rem 1rem;
    }
`;

export { Container, CardStyled };
