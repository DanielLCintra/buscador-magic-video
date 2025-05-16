import { Card } from "../../types/Card";
import { useFavorites } from "../../hooks/useFavorites";

type Props = {
  card: Card;
};

export default function FavoriteButton({ card }: Props) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  return isFavorite(card) ? (
    <button
      className="mt-2 px-2 py-1 rounded bg-pink-600 text-white text-xs hover:bg-pink-800"
      onClick={() => removeFavorite(card)}
    >
      Remover dos Favoritos
    </button>
  ) : (
    <button
      data-testid="favorite-button"
      className="mt-2 px-2 py-1 rounded bg-pink-400 text-white text-xs hover:bg-pink-600"
      onClick={() => addFavorite(card)}
    >
      Favoritar
    </button>
  );
}
