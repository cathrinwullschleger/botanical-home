import Link from "next/link";

export default function SearchResults({ searchResults }) {
  if (!searchResults || searchResults.length === 0) {
    return <p>No Plant found.</p>;
  }

  return (
    <ul>
      {searchResults.map((plant) => (
        <li key={plant._id}>
          {plant.name} ({plant.botanicalName}){" "}
          <Link href={`/plants/${plant._id}`}>Click</Link>
        </li>
      ))}
    </ul>
  );
}
