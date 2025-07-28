import useSWR from "swr";
import PlantCard, { CardContainer } from "@/components/PlantCard";

export default function HomePage({ likedPlants, toggleLikedPlant }) {
  const { data: plants, error, isLoading } = useSWR("/api/plants");
  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading Plant.</h2>;
  if (!plants) return <h2>Unfortunately no Plant found. </h2>;

  if (plants.length === 0) {
    return (
      <p>The collection is empty. Add your first Plant and start growing!</p>
    );
  }

  return (
    <CardContainer>
      {plants.map((plant) => (
        <PlantCard
          key={plant._id}
          plant={plant}
          isLiked={likedPlants.includes(plant._id)}
          onToggle={() => toggleLikedPlant(plant._id)}
        />
      ))}
    </CardContainer>
  );
}
