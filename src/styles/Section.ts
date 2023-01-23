import styled from "styled-components";
import { device } from "./Breakpoints";

export default styled.section`
  margin-top: 8rem;

  & > h2,
  & > h5 {
    text-align: center;
    color: ${({ theme }) => theme.colors.light};
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 3rem;
  }

  @media ${device.lg} {
    margin-top: 6rem;
  }

  @media ${device.md} {
    & > h2 {
      margin-bottom: 2rem;
    }
  }
`;
