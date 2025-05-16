import { useCallback, useEffect, useState } from "react";
import { Card } from "../types/Card";

function getFavorites(): Card[] {
  if (typeof window === "undefined") return [];
  const fav = localStorage.getItem("mtg-favorites");
  return fav ? JSON.parse(fav) : [];
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Card[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const addFavorite = useCallback((card: Card) => {
    setFavorites((prev) => {
      const updated = [...prev, card];
      localStorage.setItem("mtg-favorites", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeFavorite = useCallback((card: Card) => {
    setFavorites((prev) => {
      const updated = prev.filter((c) => c.id !== card.id);
      localStorage.setItem("mtg-favorites", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isFavorite = useCallback(
    (card: Card) => {
      return favorites.some((c) => c.id === card.id);
    },
    [favorites]
  );

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
