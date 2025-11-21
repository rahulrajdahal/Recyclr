import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import "../../index.css";
import Button from "./Button.tsx";

describe("Button Component test", () => {
  test("default button should render with correct styles", async () => {
    const { getByRole } = await render(<Button>Button test</Button>);

    const button = getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "#4FD255",
      color: "#333",
      padding: "20px 44px",
      fontSize: "1.125rem",
    });
    expect(button).toMatchScreenshot();
  });

  test("fill button variant should render with correct props and styles", async () => {
    const { getByRole } = await render(
      <Button variant="fill">Fill Button</Button>
    );

    const button = getByRole("button", { name: /fill button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "#4FD255",
      color: "#333",
      padding: "20px 44px",
      fontSize: "1.125rem",
    });
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
    expect(fillMdButton).toHaveStyle({
      fontSize: "1rem",
      padding: "10px 22px",
    });
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
    expect(fillSmButton).toHaveStyle({ padding: "5px 11px", fontSize: "14px" });
    expect(fillSmButton).toMatchScreenshot();

    const renderFillDisabled = await render(
      <Button variant="fill" disabled>
        Disabled Button
      </Button>
    );

    const fillDisabledButton = renderFillDisabled.getByRole("button", {
      name: /disabled button/i,
    });

    expect(fillDisabledButton).toBeInTheDocument();
    expect(fillDisabledButton).toHaveStyle({
      padding: "20px 44px",
      fontSize: "1.125rem",
      cursor: "not-allowed",
      backgroundColor: "#a7a7a7",
    });
    expect(fillDisabledButton).toMatchScreenshot();
  });

  describe("test button props", () => {
    describe("test button variant props", () => {
      test("should render button with fill variant", async () => {
        const { getByRole } = await render(
          <Button variant="fill">Fill</Button>
        );

        const button = getByRole("button", { name: /fill/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({
          background: "#4FD255",
          color: "#333",
          padding: "20px 44px",
          fontSize: "1.125rem",
          borderRadius: "0.5rem",
        });
      });

      test("should render button with outline variant", async () => {
        const { getByRole } = await render(
          <Button variant="outline">Outline</Button>
        );

        const button = getByRole("button", { name: /outline/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({
          background: "transparent",
          color: "#333",
          padding: "20px 44px",
          fontSize: "1.125rem",
          borderRadius: "0.5rem",
          border: "1px solid #333",
        });
      });

      test("should render button with text variant", async () => {
        const { getByRole } = await render(
          <Button variant="text">Text</Button>
        );

        const button = getByRole("button", { name: /text/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({
          color: "#333",
          fontSize: "1.125rem",
        });
      });
    });

    describe("test background color props", () => {
      test("should render a button with black background color", async () => {
        const { getByRole } = await render(<Button bg="black">Button</Button>);

        const button = getByRole("button", { name: /button/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({ backgroundColor: "black" });
        expect(button).toMatchScreenshot();
      });

      test("should render a button with orange background color", async () => {
        const { getByRole } = await render(<Button bg="orange">Orange</Button>);

        const button = getByRole("button", {
          name: /orange/i,
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({ backgroundColor: "orange" });
        expect(button).toMatchScreenshot();
      });
    });
    describe("test color props", () => {
      test("should render a button with black text color", async () => {
        const { getByRole } = await render(
          <Button color="black">Button</Button>
        );

        const button = getByRole("button", { name: /button/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({ color: "black" });
        expect(button).toMatchScreenshot();
      });

      test("should render a button with orange text color", async () => {
        const { getByRole } = await render(
          <Button color="orange">Orange</Button>
        );

        const button = getByRole("button", {
          name: /orange/i,
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({ color: "orange" });
        await expect(button).toMatchScreenshot();
      });
    });
    describe("test size props", () => {
      test("should render a button with large size", async () => {
        const { getByRole } = await render(<Button size="lg">Button</Button>);

        const button = getByRole("button", { name: /button/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({
          padding: "20px 44px",
          borderRadius: "0.5rem",
          fontSize: "1.125rem",
        });
        await expect(button).toMatchScreenshot("large-size-button");
      }, 1000);

      test("should render a button with medium size", async () => {
        const { getByRole } = await render(<Button size="md">Medium</Button>);

        const button = getByRole("button", {
          name: /medium/i,
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({
          padding: "10px 22px",
          borderRadius: "0.375rem",
          fontSize: "1rem",
        });
        await expect(button).toMatchScreenshot("medium-size-button");
      });

      test("should render a button with small size", async () => {
        const { getByRole } = await render(<Button size="sm">Small</Button>);

        const button = getByRole("button", {
          name: /small/i,
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle({
          padding: "5px 11px",
          borderRadius: "0.25rem",
          fontSize: "0.875rem",
        });
        await expect(button).toMatchScreenshot("small-size-button");
      });
    });
  });
});
