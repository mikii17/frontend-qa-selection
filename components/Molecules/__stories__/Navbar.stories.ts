import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "../Navbar.vue";

const meta = {
  title: "Molecules/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#0D0D0D",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
  },
  tags: [],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
