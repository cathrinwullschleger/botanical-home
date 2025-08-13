import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid black;

  background: transparent;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-radius: 0.12rem;
  width: auto;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background: var(--color-light-dark);
    color: var(--color-natural-white);
  }

  ${({ $active }) =>
    $active &&
    `
    text-decoration: underline;
   
    `}
  &:hover:not(:disabled) {
    background: var(--color-light-dark);
    color: var(--color-natural-white);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    border-color: var(--color-light-dark);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
