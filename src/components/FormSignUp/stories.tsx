import { Story, Meta } from "@storybook/react/types-6-0";
import FormSignUp from ".";
import { MockedProvider } from "@apollo/client/testing";

export default {
  title: "FormSignUp",
  component: FormSignUp
} as Meta;

export const Default: Story = () => (
  <div style={{ width: 300, margin: "auto" }}>
    <MockedProvider>
      <FormSignUp />
    </MockedProvider>
  </div>
);
