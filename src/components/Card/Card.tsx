"use client";
import { useState } from "react";
import { Card as CardType } from "../../types/Card";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type Props = {
  card: CardType;
};

export default function Card({ card }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    if (card.imageUrl) {
      setIsZoomed(true);
    }
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <div className="bg-gray-800 rounded shadow p-4 flex flex-col items-center">
        {card.imageUrl && (
          <img
            src={card.imageUrl}
            alt={card.name}
            className="w-32 h-48 object-cover mb-2 rounded cursor-zoom-in hover:scale-105 transition-transform"
            onClick={handleImageClick}
          />
        )}
        <h2 className="text-lg font-bold text-pink-400">{card.name}</h2>
        <p className="text-sm text-gray-200">{card.type}</p>
        <p className="text-xs text-gray-400 mt-2 mb-2 text-center">
          {card.text}
        </p>
        <FavoriteButton card={card} />
      </div>

      {isZoomed && card.imageUrl && (
        <div
          role="dialog"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={handleCloseZoom}
          data-testid="zoom-overlay"
        >
          <img
            src={card.imageUrl}
            alt={card.name}
            className="max-w-[90vw] max-h-[90vh] rounded shadow-lg"
            data-testid="zoomed-image"
          />
        </div>
      )}
    </>
  );
}
