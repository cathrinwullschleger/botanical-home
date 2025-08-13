import { useEffect } from "react";
import PlantCard from "./PlantCard";
import { useState } from "react";
import { StyledButton } from "./StyledButton";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-body);
  gap: 1.5rem;
  grid-column: 1 / -1;
  margin-top: 2rem;
`;

export default function PlantPagination({
  plants,
  likedPlants,
  toggleLikedPlant,
  activeFilter,
}) {
  const [page, setPage] = useState(1);
  const limit = 6; //objects per page
  const totalPages = Math.ceil(plants.length / limit);

  const paginatedPlant = plants.slice((page - 1) * limit, page * limit);

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  return (
    <>
      {paginatedPlant.map((plant) => (
        <PlantCard
          key={plant._id}
          plant={plant}
          isLiked={likedPlants.includes(plant._id)}
          onToggle={() => toggleLikedPlant(plant._id)}
        />
      ))}

      {totalPages > 1 && (
        <PaginationContainer>
          <StyledButton
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </StyledButton>
          <span>
            Page {page} of {totalPages}
          </span>
          <StyledButton
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </StyledButton>
        </PaginationContainer>
      )}
    </>
  );
}
