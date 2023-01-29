import styled from "styled-components";

export default styled.a<{ primary?: boolean }>`
  display: inline-block;
  width: max-content;
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${(props) =>
    props.primary ? props.theme.colors.background : props.theme.colors.primary};
  background: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.background};
    border-color: transparent;
  }
`;
