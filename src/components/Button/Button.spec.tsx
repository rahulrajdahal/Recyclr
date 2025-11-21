import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import "../../index.css";
import Button from "./Button.tsx";

describe("Button Component test", () => {
  test("default button should render with correct styles", async () => {
    const { getByRole } = await render(<Button>Button test</Button>);

    const button = getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: "#4FD255" });
    expect(button).toHaveStyle({ color: "#333" });
    expect(button).toHaveStyle({ padding: "20px 44px" });
    expect(button).toMatchScreenshot();
  });

  test("fill button variant should render with correct props and styles", async () => {
    const { getByRole } = await render(
      <Button variant="fill">Fill Button</Button>
    );

    const button = getByRole("button", { name: /fill button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: "#4FD255" });
    expect(button).toHaveStyle({ color: "#333" });
    expect(button).toHaveStyle({ padding: "20px 44px" });
    expect(button).toMatchScreenshot();

    const renderFillMd = await render(
      <Button variant="fill" size="md">
        Md Button
      </Button>
    );

    const fillMdButton = renderFillMd.getByRole("button", {
      name: /md button/i,
    });

    expect(fillMdButton).toBeInTheDocument();
    expect(fillMdButton).toHaveStyle({ padding: "10px 22px" });
    expect(fillMdButton).toMatchScreenshot();

    const renderFillSm = await render(
      <Button variant="fill" size="sm">
        Sm Button
      </Button>
    );

    const fillSmButton = renderFillSm.getByRole("button", {
      name: /sm button/i,
    });

    expect(fillSmButton).toBeInTheDocument();
    expect(fillSmButton).toHaveStyle({ padding: "5px 11px" });
    expect(fillSmButton).toMatchScreenshot();
  });
});
