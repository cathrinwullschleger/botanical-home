import { StyledButton } from "./StyledButton";
import styled from "styled-components";

const FilterBarWrapper = styled.div`
  /* justify-content: center;
  gap: 5rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  padding: 0 50px; /* mobil 16px Seitenabstand */
  display: grid;
  gap: 5rem;
  margin: 40px auto;
  max-width: 1200px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px; /* größerer Abstand Tablet */
  }

  @media (min-width: 900px) {
    grid-template-columns: ${({ showReset }) =>
      showReset ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
    padding: 0 60px; /* noch mehr Abstand Desktop */
  }
`;

export default function FilterBar({ activeFilter, onChange }) {
  const showReset = activeFilter;
  return (
    <>
      <h3>Find the right plants for your room’s lighting conditions:</h3>
      <FilterBarWrapper showReset={showReset}>
        <StyledButton
          active={activeFilter === "Full Sun"}
          onClick={() => onChange("Full Sun")}
        >
          Full Sun
        </StyledButton>

        <StyledButton
          active={activeFilter === "Partial Shade"}
          onClick={() => onChange("Partial Shade")}
        >
          Partial Shade
        </StyledButton>

        <StyledButton
          active={activeFilter === "Shade"}
          onClick={() => onChange("Shade")}
        >
          Shade
        </StyledButton>
        {showReset && (
          <StyledButton onClick={() => onChange(null)}>All Plants</StyledButton>
        )}
      </FilterBarWrapper>
    </>
  );
}
