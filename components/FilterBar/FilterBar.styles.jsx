import styled from "styled-components";

export const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 40px auto;
  max-width: 1200px;
  padding: 0 20px;
  margin-top: 2rem;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    padding: 0 40px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 10rem;
    justify-content: center;
    padding: 0 60px;
  }
`;

export const FilterButton = styled.button`
  border: 1px solid black;

  background: transparent;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-radius: 0.12rem;
  width: auto;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }

  ${({ $active }) =>
    $active &&
    `

    background: var(--color-light-dark);
    color: var(--color-natural-white);
    
   
    `}
`;
