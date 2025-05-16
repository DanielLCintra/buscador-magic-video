import type { Meta, StoryObj } from "@storybook/react";
import FavoriteButton from "./FavoriteButton";
import { Card as CardType } from "../../types/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Criar um QueryClient isolado para o Storybook
const queryClient = new QueryClient();

// Mock de carta
const mockCard: CardType = {
  id: "2",
  name: "Dark Ritual",
  type: "Instant",
  text: "Add {B}{B}{B}.",
  imageUrl:
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=338406&type=card",
};

const meta: Meta<typeof FavoriteButton> = {
  title: "Componentes/FavoriteButton",
  component: FavoriteButton,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="bg-gray-900 min-h-screen p-6 text-white">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
  args: {
    card: mockCard,
  },
};

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {};
