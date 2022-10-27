import { Story, Meta } from "@storybook/react/types-6-0";
import ExploreSideBar, { ExploreSidebarProps } from ".";

import items from "./mock";

export default {
  title: "ExploreSideBar",
  component: ExploreSideBar,
  args: {
    items
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar {...args} />
  </div>
);
