import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import "../../index.css";
import Footer from "./Footer";

describe("Tests for Footer Component", () => {
  test("it should render footer component", async () => {
    const { getByText, getByTestId } = await render(<Footer />);

    const footer = getByTestId("test-footer");
    expect(footer).toBeInTheDocument();
    await expect(footer).toMatchScreenshot("footer-component");

    const copyrightText = getByText(/copyright. 2020. all rights reserved/i);
    expect(copyrightText).toBeInTheDocument();
    await expect(copyrightText).toMatchScreenshot("footer-copyright");
  });
});
