import PlantCard, { CardContainer } from "@/components/PlantCard";
import { BackLink } from "@/components/BackLink";
import useSWR from "swr";

export default function MyCollection({ likedPlants, toggleLikedPlant }) {
  const { data: plants, error, isLoading } = useSWR("/api/plants");
  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading Plant.</h2>;
  if (!plants) return <h2>Unfortunately no Plant found. </h2>;

  const favoritePlants = plants.filter((plant) =>
    likedPlants.includes(plant._id)
  );
  return (
    <>
      <BackLink href="/">←</BackLink>
      <h1>My Collection</h1>
      {favoritePlants.length === 0 && (
        <p>Your collection is empty. Add your first Plant and start growing!</p>
      )}
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
  );
}
