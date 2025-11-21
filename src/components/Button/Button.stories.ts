import type { Meta, StoryObj } from "@storybook/react-vite";

import { expect, fn } from "storybook/test";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    bg: {
      control: "color",
      table: {
        defaultValue: {
          summary: "#4FD255",
        },
      },
    },
    color: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn(), disabled: false },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button",
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", {
      name: /button/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: "#4FD255" });
    expect(button).toHaveStyle({ color: "#333" });
    expect(button).toHaveStyle({ padding: "20px 44px" });
  },
};
export const Fill: Story = {
  args: {
    children: "Button",
    variant: "fill",
    size: "sm",
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", {
      name: /button/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: "#4FD255" });
    expect(button).toHaveStyle({ color: "#333" });
    expect(button).toHaveStyle({ padding: "20px 44px" });
  },
};
export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    color: "#333",
  },
};
export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
    color: "#333",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    variant: "fill",
    disabled: true,
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", {
      name: /button/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: "#a7a7a7" });
  },
};
