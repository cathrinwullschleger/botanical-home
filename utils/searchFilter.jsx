export default function getSearchResults(plants, searchQuery) {
  if (!searchQuery) return [];

  return plants.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery) ||
      plant.botanicalName.toLowerCase().includes(searchQuery)
  );
}
