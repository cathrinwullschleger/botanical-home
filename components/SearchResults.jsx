import Link from "next/link";
import styled from "styled-components";

const ResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-background-white);
  max-height: 300px;
  overflow: scroll;
  padding: 1rem 0.5rem;
  box-shadow: 0 3px 10px var(--color-shadow-black-rgba);
  border-radius: 0.12rem;
`;

const ResultLink = styled(Link)`
  text-decoration: none;

  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export default function SearchResults({ searchResults }) {
  return (
    <>
      <ResultList>
        {searchResults.map((plant) => (
          <li key={plant._id}>
            <ResultLink href={`/plants/${plant.slug}`}>
              {plant.name} ({plant.botanicalName}){" "}
            </ResultLink>
          </li>
        ))}
      </ResultList>
    </>
  );
}
