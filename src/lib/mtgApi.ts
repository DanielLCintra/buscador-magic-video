import { useQuery } from "@tanstack/react-query";
import { Card } from "@/types/Card";

async function fetchCards(query: string): Promise<Card[]> {
    if (!query) return [];
    const res = await fetch(`https://api.magicthegathering.io/v1/cards?name=${encodeURIComponent(query)}&pageSize=15`)

    const data = await res.json()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data.cards || []).map((card: any) => ({
        id: card.id,
        name: card.name,
        type: card.type,
        text: card.text,
        imageUrl: card.imageUrl || '/no-image.png',

    }))
}

export function useCards(query: string) {
    return useQuery<Card[]>({
        queryKey: ['cards', query],
        queryFn: () => fetchCards(query),
        enabled: !!query
    })
}