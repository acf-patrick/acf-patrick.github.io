import styled, { keyframes } from "styled-components";

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

export default styled.nav`
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
  animation: ${Showing} 1s both;

  a {
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