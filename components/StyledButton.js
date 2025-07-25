import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  justify-self: center;
  border: 1px solid black;
  margin-top: 0.75rem;
  background: transparent;
  padding: 0.5em 1em;
  font-size: 1rem;
  margin-right: 0.5rem;
  border-radius: 0.12rem;
  width: auto;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background: var(--color-light-dark);
    color: var(--color-natural-white);
  }
`;
