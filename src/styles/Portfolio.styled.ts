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

export default styled(BaseSection)<{ inView: boolean }>`
  .container {
    animation: ${({ inView }) => inView && Appearing} 1s 300ms both;
    opacity: 0;
    border-radius: 5px;

    max-width: 720px;
    padding-bottom: 1rem;

    @media ${device.md} {
      width: 95%;
    }
  }

  .labels {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    span {
      font-size: 0.75rem;
      padding: 0.5rem 1rem;
      background: ${({ theme }) => theme.colors.background};
      border-radius: 20px;
      cursor: default;
      box-shadow: none;
      transition: box-shadow 500ms;

      &:hover {
        box-shadow: 0 0 2px white;
      }
    }
  }

  .card {
    @media ${device.md} {
      flex-wrap: wrap;
      gap: 0;

      .image {
        padding: 5px;
      }

      img {
        max-width: 280px;
      }

      main {
        padding-left: 2rem;
      }
    }

    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;

    background: ${({ theme }) => theme.colors.backgroundVariant};

    .image {
      padding: 15px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 1rem;
      padding-right: 1rem;
      gap: 1rem;
    }

    h3 {
      font-weight: bold;
    }

    p {
      color: ${({ theme }) => theme.colors.primaryVariant};
      padding-right: 1rem;
      text-align: left;
    }

    img {
      max-width: 320px;
      border-radius: 5px;
      aspect-ratio: 1;
      object-fit: contain;
      transition: ${({ theme }) => theme.transition};

      &:hover {
        transform: scale(1.125);
      }
    }
  }

  /* .card {
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
  } */
`;
