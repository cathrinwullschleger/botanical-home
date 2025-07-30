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
  return (
    <>
      <h3>Find the right plants for your room’s lighting conditions:</h3>
      <FilterBarWrapper>
        <StyledButton
          active={activeFilter === "Full Sun"}
          onClick={() =>
            onChange(activeFilter === "Full Sun" ? null : "Full Sun")
          }
        >
          Full Sun
        </StyledButton>

        <StyledButton
          active={activeFilter === "Partial Shade"}
          onClick={() =>
            onChange(activeFilter === "Partial Shade" ? null : "Partial Shade")
          }
        >
          Partial Shade
        </StyledButton>

        <StyledButton
          active={activeFilter === "Shade"}
          onClick={() => onChange(activeFilter === "Shade" ? null : "Shade")}
        >
          Shade
        </StyledButton>
      </FilterBarWrapper>
    </>
  );
}
