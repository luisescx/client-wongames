import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import TextField from ".";
import { Email } from "@styled-icons/material-outlined";

describe("<TextField />", () => {
  it("should render the label", () => {
    renderWithTheme(<TextField label="Label" name="Label" />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render without label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText("textbox")).not.toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    renderWithTheme(<TextField placeholder="text placeholder" />);

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "text placeholder"
    );
  });

  it("Changes its value when typing", async () => {
    const onInputChange = jest.fn();
    renderWithTheme(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
      />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
    });
    expect(onInputChange).toHaveBeenCalledWith(text);
  });

  it("should show icon", () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("Does not changes its value when disabled", async () => {
    const onInputChange = jest.fn();
    renderWithTheme(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInputChange).not.toHaveBeenCalled();
  });

  it("Is accessible by tab", async () => {
    renderWithTheme(<TextField label="TextField" name="TextField" />);

    const input = screen.getByLabelText("TextField");
    expect(document.body).toHaveFocus();

    userEvent.tab();

    await waitFor(() => {
      expect(input).toHaveFocus();
    });
  });

  it("should render with error", () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="Error message"
      />
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
  });
});
