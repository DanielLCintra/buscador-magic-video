"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useCards } from "../lib/mtgApi";
import Card from "../components/Card/Card";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, isLoading, isError } = useCards(query);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Erro ao carregar as cartas</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {data && data.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </div>
  );
}
