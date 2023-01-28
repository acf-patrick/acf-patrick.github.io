import styled from "styled-components";
import BaseContainer from "./Container";
import { device } from "./Breakpoints";

const Container = styled(BaseContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.lg} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media ${device.md} {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const CardStyled = styled.article`
  background: ${({ theme }) => theme.colors.backgroundVariant};
  border-radius: 0 0 2rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: fit-content;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primary};
    cursor: default;
  }

  div {
    background: ${({ theme }) => theme.colors.primary};
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

    h3 {
      color: ${({theme}) => theme.colors.background};
      font-size: 1rem;
      text-align: center;
    }
  }

  ul {
    padding: 2rem;
  }

  li {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    p {
      margin: 0;
    }
  }
`;

export { Container, CardStyled };
