import styled from "styled-components";

const StyledInput = styled.input`
  font-family: var(--font-family-body);
  width: 17rem;
  background-image: url("/magnifying-glass.svg");
  background-repeat: no-repeat;
  background-position: 0.7rem center;
  background-size: 1rem 1rem;
  padding: 0.6rem 0.6rem 0.6rem 2.4rem;
  border: 1px solid var(--color-shadow-black-rgba);
  border-radius: 50px;
`;
export default function SearchPlant({ setSearchQuery }) {
  return (
    <>
      <label htmlFor="search">Searching for a specific plant? </label>

      <StyledInput
        name="search"
        onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
        onBlur={() => setSearchQuery("")}
        placeholder="Search .."
      ></StyledInput>
    </>
  );
}
