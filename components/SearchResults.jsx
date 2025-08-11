import Link from "next/link";
import styled from "styled-components";

const ResultListItem = styled.li``;
const ResultList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
          <ResultListItem key={plant._id}>
            <ResultLink href={`/plants/${plant._id}`}>
              {plant.name} ({plant.botanicalName}){" "}
            </ResultLink>
          </ResultListItem>
        ))}
      </ResultList>
    </>
  );
}
