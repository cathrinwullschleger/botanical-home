import styled from "styled-components";

const HeartButton = styled.button`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
`;

export default function FavoriteButton({ isLiked, onToggle }) {
  return (
    <HeartButton
      onClick={onToggle}
      aria-label={
        isLiked ? "Remove from my Collection" : "Add to my Collection"
      }
    >
      <span aria-hidden="true">{isLiked ? "♥" : "♡"}</span>
    </HeartButton>
  );
}
