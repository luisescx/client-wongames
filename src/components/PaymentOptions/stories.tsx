import { Story, Meta } from "@storybook/react/types-6-0";
import PaymentOption, { PaymentOptionsProps } from ".";
import cardsMock from "./mock";

export default {
  title: "PaymentOption",
  component: PaymentOption,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: "symbol"
    },
    handlePayment: {
      action: "clicked"
    }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<PaymentOptionsProps>;

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOption {...args} />
  </div>
);
