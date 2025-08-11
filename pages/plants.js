import useSWR from "swr";
import PlantCard, { CardContainer } from "@/components/PlantCard";
import SearchPlant from "@/components/SearchPlant";
import SearchResults from "@/components/SearchResults";
import FilterBar from "@/components/FilterBar";
import { useState } from "react";
import getSearchResults from "@/utils/searchFilter";

export default function PlantsPage({
  likedPlants,
  toggleLikedPlant,
  searchQuery,
  setSearchQuery,
}) {
  const [activeFilter, setActiveFilter] = useState(null);

  const { data: plants, error, isLoading } = useSWR("/api/plants");
  const searchResults = getSearchResults(plants, searchQuery);

  const filteredPlants = activeFilter
    ? plants.filter((plant) => plant.lightNeed === activeFilter)
    : plants || [];

  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading Plant.</h2>;
  if (!plants) return <h2>Unfortunately no Plant found. </h2>;

  if (plants.length === 0) {
    return (
      <p>The collection is empty. Add your first Plant and start growing!</p>
    );
  }

  return (
    <>
      <h1>Plant Collection</h1>
      <SearchPlant searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults searchResults={searchResults} />
      <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
      <CardContainer>
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant._id}
            plant={plant}
            isLiked={likedPlants.includes(plant._id)}
            onToggle={() => toggleLikedPlant(plant._id)}
          />
        ))}
      </CardContainer>
    </>
  );
}
