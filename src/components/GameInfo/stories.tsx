import { Story, Meta } from "@storybook/react/types-6-0";
import GameInfo, { GameInfoProps } from ".";
import mockGame from "./mock";
import { CartContextData } from "hooks/use-cart";

export default {
  title: "Game/GameInfo",
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  args: mockGame
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
    <GameInfo {...args} />
  </div>
);

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
    <GameInfo {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true
};
