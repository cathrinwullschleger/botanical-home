import Link from "next/link";

export default function SearchResults({ searchResults }) {
  return (
    <>
      <ul>
        {searchResults.map((plant) => (
          <li key={plant._id}>
            <Link href={`/plants/${plant._id}`}>
              {plant.name} ({plant.botanicalName}){" "}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
