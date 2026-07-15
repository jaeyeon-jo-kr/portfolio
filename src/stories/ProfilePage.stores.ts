import type { Meta, StoryObj } from "@storybook/react-vite";
import { Profile } from "../profile/Profile";


const meta = {
  title: 'Example/ProfilePage',
  component: Profile,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileStart: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};