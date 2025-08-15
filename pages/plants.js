import useSWR from "swr";
import { CardContainer } from "@/components/PlantCard/PlantCard.styles";
import SearchPlant from "@/components/SearchPlant";
import SearchResults from "@/components/SearchResults";
import FilterBar from "@/components/FilterBar/FilterBar";
import { useState } from "react";
import getSearchResults from "@/utils/searchFilter";
import { SearchWrapper } from "@/components/SearchWrapper";
import { useEffect } from "react";
import { PlantPageHeader } from "@/components/PlantsPageHeader";
import PlantPagination from "@/components/PlantPagination";

export default function PlantsPage({
  likedPlants,
  toggleLikedPlant,
  searchQuery,
  setSearchQuery,
}) {
  const [activeFilter, setActiveFilter] = useState(null);

  const { data: plants, error, isLoading } = useSWR("/api/plants");

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

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
      <PlantPageHeader>
        <h1>Plant Collection</h1>
        <SearchWrapper>
          <SearchPlant
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {searchResults.length > 0 && (
            <SearchResults searchResults={searchResults} />
          )}
        </SearchWrapper>
      </PlantPageHeader>
      <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
      <CardContainer>
        <PlantPagination
          plants={filteredPlants}
          likedPlants={likedPlants}
          toggleLikedPlant={toggleLikedPlant}
          activeFilter={[activeFilter]}
        />
      </CardContainer>
    </>
  );
}
