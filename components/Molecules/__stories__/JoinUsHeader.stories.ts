import type { Meta, StoryObj } from "@storybook/vue3";
import JoinUsHeader from "../JoinUsHeader.vue";

const meta = {
  title: "Molecules/JoinUsHeader",
  component: JoinUsHeader,
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
} satisfies Meta<typeof JoinUsHeader>;

export default meta;
type Story = StoryObj<typeof JoinUsHeader>;

export const Default: Story = {
  args: {},
};
