import { Story, Meta } from "@storybook/react/types-6-0";
import Banner, { BannerProps } from ".";

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    ribbon: {
      type: "string"
    }
  },
  args: {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death"
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
);

export const WithRibbons: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
);

WithRibbons.args = {
  ribbon: "On Sale",
  ribbonSize: "normal",
  ribbonColor: "primary"
};
