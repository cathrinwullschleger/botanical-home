import PlantCard, { CardContainer } from "@/components/PlantCard";
import { BackLink } from "@/components/BackLink";
import { StyledLink } from "@/components/StyledLink";
import useSWR from "swr";
import styled from "styled-components";
import { ButtonWrapper } from "@/components/StyledButton";
import getSearchResults from "@/utils/searchFilter";
import SearchPlant from "@/components/SearchPlant";
import SearchResults from "@/components/SearchResults";
import { SearchWrapper } from "@/components/SearchWrapper";
import { useEffect } from "react";
const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* zentriert alles horizontal */
  gap: 1.2rem; /* Abstand zwischen h1, p, Link */
  margin-top: 3rem; /* Abstand zum Header o.Ä. */
  padding: 0 1rem; /* horizontaler Puffer auf Mobil */
  text-align: center;
`;

export default function MyCollection({
  likedPlants,
  toggleLikedPlant,
  searchQuery,
  setSearchQuery,
}) {
  const { data: plants, error, isLoading } = useSWR("/api/plants");

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading Plant.</h2>;
  if (!plants) return <h2>Unfortunately no Plant found. </h2>;

  const favoritePlants = plants.filter((plant) =>
    likedPlants.includes(plant._id)
  );
  const searchResults = getSearchResults(favoritePlants, searchQuery);

  return (
    <>
      {favoritePlants.length === 0 ? (
        <EmptyStateWrapper>
          <h1>My Collection</h1>
          <p>
            Your collection is empty. Add your first Plant and start growing!
          </p>
          <ButtonWrapper>
            <StyledLink href="/plants">All Plants</StyledLink>
            <StyledLink href="/add">Add a new Plant</StyledLink>
          </ButtonWrapper>
        </EmptyStateWrapper>
      ) : (
        <>
          <BackLink href="/">←</BackLink>
          <h1>My Collection</h1>
          <SearchWrapper>
            <SearchPlant
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <SearchResults searchResults={searchResults} />
          </SearchWrapper>
          <CardContainer>
            {favoritePlants.map((plant) => (
              <PlantCard
                key={plant._id}
                plant={plant}
                isLiked={true}
                onToggle={() => toggleLikedPlant(plant._id)}
              />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}
