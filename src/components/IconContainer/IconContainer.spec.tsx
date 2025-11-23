import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { DeleteBin } from "../../assets/icons";
import IconContainer from "./IconContainer";

describe("Icon Container Component test", () => {
  test("should render icon container component with default props", async () => {
    const { getByTestId } = await render(
      <IconContainer icon={<DeleteBin />} />
    );

    const iconContainer = getByTestId("recyclr-iconContainer");
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveStyle({
      backgroundColor: "#ea433533",
      // borderRadius: "1.75rem",
      // padding: "1.62rem",
    });
    // await expect(iconContainer).toMatchScreenshot("default-iconContainer");
  });

  describe("test IconContainer bg props", () => {
    test("should render icon container with red background color", async () => {
      const bg = "red";

      const { getByTestId } = await render(
        <IconContainer icon={<DeleteBin />} bg={bg} />
      );

      const iconContainer = getByTestId("recyclr-iconContainer");
      expect(iconContainer).toBeInTheDocument();
      expect(iconContainer).toHaveStyle({ backgroundColor: bg });
      // await expect(iconContainer).toMatchScreenshot("iconContainer-bg-red");
    });

    test("should render icon container with random background color", async () => {
      const generateRandomHexColor = () => {
        let randomNum = Math.floor(Math.random() * 0xffffff);
        let hexString = randomNum.toString(16).padStart(6, "0");
        return `#${hexString}`;
      };
      const randomBg = generateRandomHexColor();
      const { getByTestId } = await render(
        <IconContainer icon={<DeleteBin />} bg={randomBg} />
      );

      const iconContainer = getByTestId("recyclr-iconContainer");
      expect(iconContainer).toBeInTheDocument();
      expect(iconContainer).toHaveStyle({ backgroundColor: randomBg });
    });
  });
});
