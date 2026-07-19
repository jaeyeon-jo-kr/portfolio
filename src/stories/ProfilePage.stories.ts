import type { Meta, StoryObj } from "@storybook/react-vite";
import Profile from "../profile/Profile";

const meta = {
  title: 'Test/MyProfile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppStart: Story = {
  args: {
  },
};