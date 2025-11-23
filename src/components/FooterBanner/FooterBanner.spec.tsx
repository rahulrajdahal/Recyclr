import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import FooterBanner from "./FooterBanner";

describe("test footer banner component", () => {
  test("should render footer banner with default props", async () => {
    const { getByTestId, getByText, getByRole } = await render(
      <FooterBanner />
    );

    const footerBanner = getByTestId("recyclr-footerBanner");
    expect(footerBanner).toBeInTheDocument();

    expect(getByText("Ready to Get Started?")).toBeInTheDocument();
    expect(
      getByRole("button", { name: /start recycling/i })
    ).toBeInTheDocument();

    await expect(footerBanner).toMatchScreenshot("footer-banner");
  });
});
