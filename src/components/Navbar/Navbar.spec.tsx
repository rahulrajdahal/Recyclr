import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import Navbar from "./Navbar";

describe("test navbar component", () => {
  test("should render navbar with default props", async () => {
    const { getByTestId, getByText } = await render(<Navbar />);

    const navbar = getByTestId("recyclr-navbar");
    expect(navbar).toBeInTheDocument();

    expect(getByText("Recyclr")).toBeInTheDocument();
    await expect(navbar).toMatchScreenshot("navbar");
  });
});
