import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Background color of the button */
  bg?: string;
  /** Text color of the button */
  color?: string;
  /** Variant of the button */
  variant?: "fill" | "outline" | "text";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
};

export default function Button({
  bg = "#4FD255",
  color = "#333",
  variant = "fill",
  size = "lg",
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
        return `px-2.75 py-2.5 ${textSizeStyle()}`;
      case "md":
        return `px-5.5 py-2.5 ${textSizeStyle()}`;
      case "lg":
        return `px-11 py-5 ${textSizeStyle()}`;
      default:
        return `px-2.75 py-2.5 ${textSizeStyle()}`;
    }
  };

  const variantStyle = () => {
    switch (variant) {
      case "fill":
        return `${sizeStyle()}`;
      case "outline":
        bg = "transparent";
        color = color === "#333" ? "#4FD255" : color;
        return `${sizeStyle()} border`;
      case "text":
        color = "#4FD255";
        bg = "transparent";
        return `${sizeStyle()}`;

      default:
        return `${sizeStyle()}`;
    }
  };

  return (
    <button
      {...props}
      className={`${variantStyle()} rounded-[0.875rem] hover:cursor-pointer leading-normal font-semibold ${
        props?.className
      }`}
      style={{
        ...props.style,
        backgroundColor: bg ?? props.style?.backgroundColor,
        color: color ?? props.style?.color,
        borderColor: variant === "outline" ? color : props.style?.borderColor,
      }}
    >
      {props.children}
    </button>
  );
}
