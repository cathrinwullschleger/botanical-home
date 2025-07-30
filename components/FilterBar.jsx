import { StyledButton } from "./StyledButton";
import styled from "styled-components";

const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 40px auto;
  max-width: 1200px;
  padding: 0 20px;

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

export default function FilterBar({ activeFilter, onChange }) {
  const filterOptions = ["Full Sun", "Partial Shade", "Shade"];
  return (
    <>
      <h3>Find the right plants for your room’s lighting conditions:</h3>
      <FilterBarWrapper>
        {filterOptions.map((option) => (
          <StyledButton
            key={option}
            active={activeFilter === option}
            onClick={() => onChange(activeFilter === option ? null : option)}
          >
            {option}
          </StyledButton>
        ))}
      </FilterBarWrapper>
    </>
  );
}
