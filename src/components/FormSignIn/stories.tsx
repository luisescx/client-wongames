import { Story, Meta } from "@storybook/react/types-6-0";
import FormSignIn from ".";
import { MockedProvider } from "@apollo/client/testing";

export default {
  title: "FormSignIn",
  component: FormSignIn
} as Meta;

export const Default: Story = () => (
  <div style={{ width: 300, margin: "auto" }}>
    <MockedProvider>
      <FormSignIn />
    </MockedProvider>
  </div>
);
