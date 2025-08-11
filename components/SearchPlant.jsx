export default function SearchPlant({ setSearchQuery }) {
  return (
    <>
      <label for="search">Searching for a specific plant?</label>
      <input
        name="search"
        onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
        placeholder="Search .."
      ></input>
    </>
  );
}
