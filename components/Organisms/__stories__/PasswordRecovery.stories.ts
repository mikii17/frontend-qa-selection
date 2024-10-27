import type { Meta, StoryObj } from "@storybook/vue3";
import PasswordRecovery from "../PasswordRecovery.vue";

import { userStore, resetUserStore } from "~/store/store";
userStore.email.value = "michael12gashaw@gmail.com";

const meta = {
  title: "Organisms/PasswordRecovery",
  component: PasswordRecovery,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PasswordRecovery>;

export default meta;
type Story = StoryObj<typeof PasswordRecovery>;

export const Default: Story = {
  args: {},
};
