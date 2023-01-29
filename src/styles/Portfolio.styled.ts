import styled, { keyframes } from "styled-components";
import BaseSection from "../styles/Section";
import { device } from "./Breakpoints";

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

export default styled(BaseSection)<{inView: boolean}>`
  .container {
    animation: ${({ inView }) => inView && Appearing} 1s 300ms both;
    opacity: 0;

    width: 30%;
    padding-bottom: 1rem;

    @media ${device.lg} {
      width: 60%;
    }

    @media ${device.md} {
      width: 90%;
    }
  }

  .card {
    background: ${({ theme }) => theme.colors.backgroundVariant};
    padding: 1rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      background: transparent;
      border-color: ${({ theme }) => theme.colors.primaryVariant};
    }

    h3 {
      margin: 1rem 0 1rem;
      font-weight: bold;
    }

    p {
      color: ${({ theme }) => theme.colors.primaryVariant};
    }

    div {
      &:first-of-type {
        border-radius: 1.5rem;
        overflow: hidden;
      }

      &:last-of-type {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
      }
    }

    img {
      width: 100%;
      transition: ${({ theme }) => theme.transition};

      &:hover {
        transform: scale(1.125);
      }
    }
  }
`;
