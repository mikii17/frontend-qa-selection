import type { Meta, StoryObj } from "@storybook/vue3";
import SignUp from "../SignUp.vue";

const meta = {
  title: "Organisms/SignUp",
  component: SignUp,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignUp>;

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Default: Story = {
  args: {},
};
