import type { Meta, StoryObj } from "@storybook/vue3";
import Hero from "../Hero.vue"; // Adjust path accordingly

const meta = {
  title: "Organisms/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
};
