import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { Card as CardType } from "../../types/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Criar um client do React Query para uso no Storybook
const queryClient = new QueryClient();

// Mock de carta para visualização no Storybook
const mockCard: CardType = {
  id: "1",
  name: "Lightning Bolt",
  type: "Instant",
  text: "Lightning Bolt deals 3 damage to any target.",
  imageUrl:
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129507&type=card",
};

const meta: Meta<typeof Card> = {
  title: "Componentes/Card",
  component: Card,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="bg-gray-900 min-h-screen p-6 text-white">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    card: mockCard,
  },
};
