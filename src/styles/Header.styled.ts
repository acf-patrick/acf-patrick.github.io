import styled, { keyframes } from "styled-components";
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

const BarGrowing = keyframes`
  from {
    height: 0;
  }
  to {
    height: 4rem;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: absolute;
  bottom: 3rem;
  left: 0;
  font-size: 1.3rem;

  & > a:hover {
    transform: scale(1.125);
  }

  &:after {
    content: "";
    width: 1px;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${BarGrowing} 1s 1.5s both;
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

const Container = styled.header`
  height: 100vh;
  padding-top: 4rem;
  overflow: hidden;

  @media ${device.lg} {
    height: 68vh;
  }

  @media ${device.md} {
    height: 100vh;
  }
`;

export { Inner, Photo, Buttons, Socials, Container };
