import useSWR from "swr";
import Link from "next/link";
import { PlantCard, CardContainer, PlantImage } from "../components/PlantCard";

export default function HomePage() {
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
        <PlantCard key={plant._id}>
          <Link href={`/plants/${plant._id}`}>
            <PlantImage
              src={plant.imageUrl}
              alt={plant.name || "Plant Image"}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              priority
            />
          </Link>

          <h2>{plant.name}</h2>
          <h3>{plant.botanicalName}</h3>
        </PlantCard>
      ))}
    </CardContainer>
  );
}
