import { Story, Meta } from "@storybook/react/types-6-0";
import { Email } from "@styled-icons/material-outlined";
import TextField, { TextFieldProps } from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    label: "Email",
    name: "email",
    initialValue: "",
    placeholder: "user@email.com",
    icon: <Email />,
    iconPosition: "left",
    disabled: false
  },
  argTypes: {
    onInput: { action: "changed" },
    icon: { type: "symbol" }
  }
} as Meta<TextFieldProps>;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: "Oops...something went wrong"
};
