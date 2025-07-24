import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";
import { PlantCard, CardContainer, PlantImage } from "../components/PlantCard";

export default function HomePage() {
  const { data: plants, error, isLoading } = useSWR("/api/plants");
  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading plant.</h2>;
  if (!plants && !isLoading && !error)
    return <h2>Unfortunately no Plant found. </h2>;

  return (
    <div>
      <CardContainer>
        {plants.map((plant) => {
          return (
            <li key={plant._id}>
              <PlantCard>
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
            </li>
          );
        })}
      </CardContainer>
    </div>
  );
}
