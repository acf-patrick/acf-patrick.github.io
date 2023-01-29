import styled, { keyframes } from "styled-components";
import { device } from "./Breakpoints";

const Showing = keyframes`
  from {
    bottom: 0;
    transform: translate(-50%, 100%);
  }
  to {
    bottom: 2rem;
    transform: translate(-50%, 0);
  }
`;

const Bouncing = keyframes`
  from {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(5px);
  }
`;

const ScrollButton = styled.a`
  position: absolute;
  right: 5rem;
  top: calc(100vh - 100px);
  font-size: 0.9rem;
  border-radius: 3rem;
  padding: 0.75rem 0.75rem;
  animation: ${Bouncing} 800ms alternate linear infinite both;

  * {
    font-size: 1.25rem;
  }

  svg * {
    stroke: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    svg * {
      stroke: ${({ theme }) => theme.colors.background};
    }
  }

  @media ${device.md} {
    display: none;
  }
`;

const Container = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(12px);
  animation: ${Showing} 1s 500ms both cubic-bezier(0.25, 0.1, 0.28, 1.29);

  &>a {
    background: transparent;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    color: ${({theme}) => theme.colors.light};
    font-size: 1.25rem;
    
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    &.active {
      background: ${({theme}) => theme.colors.background};
      color: white;
    }
  }
`;

export { Container, ScrollButton };