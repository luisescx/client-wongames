import { Story, Meta } from "@storybook/react/types-6-0";
import TextField, { TextFieldProps } from ".";

export default {
  title: "TextField",
  component: TextField,
  args: {
    label: "Email",
    labelFor: "Email",
    initialValue: "",
    placeholder: "user@email.com"
  },
  argTypes: {
    onInput: { action: "changed" }
  }
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
