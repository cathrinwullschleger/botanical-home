export default function FavoriteButton({ isLiked, onToggle }) {
  return (
    <button onClick={onToggle} aria-label="Toggle favorite">
      {isLiked ? "♥" : "♡"}
    </button>
  );
}
