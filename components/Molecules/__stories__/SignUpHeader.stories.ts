import type { Meta, StoryObj } from "@storybook/vue3";
import SignUpHeader from "../SignUpHeader.vue";

const meta = {
  title: "Molecules/SignUpHeader",
  component: SignUpHeader,
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
} satisfies Meta<typeof SignUpHeader>;

export default meta;
type Story = StoryObj<typeof SignUpHeader>;

export const Default: Story = {
  args: {},
};
