"use client";

import Card from "../../components/Card/Card";
import { useFavorites } from "../../hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cartas Favoritas</h1>
      {favorites.length === 0 && <p>Nenhuma carta favoritada ainda.</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
