import { FilterBarWrapper, FilterButton } from "./FilterBar.styles";

export default function FilterBar({ activeFilter, onChange }) {
  const filterOptions = ["Full Sun", "Partial Shade", "Shade"];
  return (
    <>
      <h3>Find the right plants for your room’s lighting conditions:</h3>
      <FilterBarWrapper>
        {filterOptions.map((option) => (
          <FilterButton
            key={option}
            $active={activeFilter === option}
            onClick={() => onChange(activeFilter === option ? null : option)}
          >
            {option}
          </FilterButton>
        ))}
      </FilterBarWrapper>
    </>
  );
}
