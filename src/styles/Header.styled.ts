import styled from "styled-components";
import BaseContainer from "./Container";
import { device } from "./Breakpoints";

const Inner = styled(BaseContainer)`
  text-align: center;
  height: 100%;
  position: relative;
`;

const Photo = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    transparent
  );
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  padding: 1.5rem;
  padding-top: 4rem;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: absolute;
  bottom: 5rem;
  left: 0;

  &:after {
    content: "";
    width: 1px;
    height: 4rem;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media ${device.md} {
    display: none;
  }
`;

const Buttons = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ScrollButton = styled.a`
  position: absolute;
  right: 0rem;
  bottom: 5rem;
  font-size: 0.9rem;
  border-radius: 3rem;
  padding: 0.75rem 0.75rem;

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

const Container = styled.header`
  height: 100vh;
  padding-top: 5rem;
  overflow: hidden;

  @media ${device.lg} {
    height: 68vh; 
  }

  @media ${device.md} {
    height: 100vh;
  }
`;

export { Inner, Photo, Buttons, ScrollButton, Socials, Container };
