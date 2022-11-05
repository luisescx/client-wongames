import { Story, Meta } from "@storybook/react/types-6-0";
import GameCard, { GameCardProps } from ".";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    slug: "population-zero",
    title: "Red Redemption 2",
    developer: "Rockstar Games",
    price: 235,
    promotionalPrice: 215
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary"
};
