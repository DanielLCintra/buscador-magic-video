import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";
import { useState } from "react";

const meta: Meta<typeof SearchBar> = {
  title: "Componentes/SearchBar",
  component: SearchBar,
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen text-white p-6 max-w-xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <SearchBar
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log("Busca:", newValue);
        }}
      />
    );
  },
};
