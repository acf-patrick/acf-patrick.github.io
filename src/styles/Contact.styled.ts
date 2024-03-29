import styled from "styled-components";
import BaseContainer from "./Container";
import { device } from "./Breakpoints";
import { keyframes } from "styled-components";

const Container = styled(BaseContainer)`
  display: grid;
  width: 58%;
  margin-bottom: 7rem;
  grid-template-columns: 30% 58%;
  gap: 12%;

  div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    cursor: pointer;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primaryVariant};
    resize: none;
    color: white;
  }

  @media ${device.lg} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media ${device.md} {
    width: 90%;
  }
`;

const Appearing = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

const CardStyled = styled.article<{ inView: boolean; index: number }>`
  animation: ${({ inView }) => inView && Appearing} 1s
    ${({ index }) => index * 300}ms both;
  opacity: 0;

  background: ${({ theme }) => theme.colors.backgroundVariant};
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primaryVariant};
  }

  svg {
    font-size: 1.5rem;
  }

  h4,
  h5 {
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;

export { Container, CardStyled };
