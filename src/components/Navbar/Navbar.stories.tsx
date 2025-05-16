import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./Navbar";

const meta: Meta<typeof NavBar> = {
  title: "Componentes/NavBar",
  component: NavBar,
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen text-white p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
