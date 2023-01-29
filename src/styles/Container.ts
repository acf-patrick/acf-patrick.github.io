import styled from "styled-components";
import { device } from "./Breakpoints";

export default styled.div`
  width: ${({ theme }) => theme.sizes.lg};
  margin: 0 auto;

  @media ${device.lg} {
    width: ${({ theme }) => theme.sizes.md};
  }

  @media ${device.md} {
    width: ${({ theme }) => theme.sizes.sm};
  }
`;
