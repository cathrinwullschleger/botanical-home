import { StyledCard, CardLink, PlantImage } from "./PlantCard.styles";
import FavoriteButton from "../FavoriteButton";

export default function PlantCard({ plant, isLiked, onToggle }) {
  return (
    <StyledCard>
      <FavoriteButton isLiked={isLiked} onToggle={onToggle} />
      <CardLink href={`/plants/${plant.slug}`}>
        <PlantImage
          src={plant.imageUrl}
          alt={plant.name || "Plant Image"}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          priority
        />

        <h2>{plant.name}</h2>
        <h3>{plant.botanicalName}</h3>
      </CardLink>
    </StyledCard>
  );
}
