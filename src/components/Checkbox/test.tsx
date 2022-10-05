import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import Checkbox from ".";

describe("<Checkbox />", () => {
  it("should render with label", () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render without label", () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText("checkbox")).not.toBeInTheDocument();
  });

  it("should render with black label", () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelColor="black" labelFor="check" />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: "#030517"
    });
  });

  it("should dispatch onCheck when status changes", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
  });

  it("should starts checked", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it("should be accessible with tab", async () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    await waitFor(() => {
      expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
    });
  });
});
