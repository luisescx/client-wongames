import { Story, Meta } from "@storybook/react/types-6-0";
import UserDropdown from ".";

export default {
  title: "UserDropdown",
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Default: Story = () => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}>
    <UserDropdown username="John" />
  </div>
);
