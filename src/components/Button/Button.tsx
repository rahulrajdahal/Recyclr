import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  /** Background color of the button */
  bg?: string;
  /** Text color of the button */
  color?: string;
  /** Variant of the button */
  variant?: "fill" | "outline" | "text";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** Is the button disabled? */
  disabled?: boolean;
};

export default function Button({
  bg = "#4FD255",
  color = "#333",
  variant = "fill",
  size = "lg",
  disabled = false,
  ...props
}: ButtonProps) {
  const textSizeStyle = () => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "md":
        return "text-base";
      case "lg":
        return "text-lg";
      default:
        return "text-sm";
    }
  };

  const sizeStyle = () => {
    switch (size) {
      case "sm":
        return `px-2.75 py-1.25 rounded-sm ${textSizeStyle()}`;
      case "md":
        return `px-5.5 py-2.5 rounded-md ${textSizeStyle()}`;
      case "lg":
        return `px-11 rounded-lg py-5 ${textSizeStyle()}`;
      default:
        return `px-2.75 py-1.25 rounded-sm ${textSizeStyle()}`;
    }
  };

  const variantStyle = () => {
    switch (variant) {
      case "fill":
        if (disabled) {
          bg = "#a7a7a7";
        }
        return `${sizeStyle()}`;
      case "outline":
        bg = "transparent";
        if (disabled) {
          color = "#a7a7a7";
        }
        return `${sizeStyle()} border`;
      case "text":
        bg = "transparent";
        return `${sizeStyle()}`;

      default:
        return `${sizeStyle()}`;
    }
  };

  return (
    <button
      {...props}
      className={`${variantStyle()}  disabled:cursor-not-allowed  hover:cursor-pointer leading-normal font-semibold ${
        props?.className
      }`}
      style={{
        ...props.style,
        backgroundColor: bg ?? props.style?.backgroundColor,
        color: color ?? props.style?.color,
        borderColor: variant === "outline" ? color : props.style?.borderColor,
      }}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {props.children}
    </button>
  );
}
