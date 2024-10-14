import type { Meta, StoryObj } from "@storybook/vue3";
import JoinUs from "../JoinUs.vue";

const meta = {
  title: "Organisms/JoinUs",
  component: JoinUs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof JoinUs>;

export default meta;
type Story = StoryObj<typeof JoinUs>;

export const Default: Story = {
  args: {},
};
