import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  bg?: string;
};

export default function Button({
  bg = "#4FD255",
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      {...props}
      className={`rounded-[0.875rem] max-h-15 w-fit px-[2.94rem] py-5 h-full text-[#333] text-lg leading-normal font-semibold ${props?.className}`}
      style={{
        ...props.style,
        backgroundColor: bg ?? props.style?.backgroundColor,
      }}
    >
      {props.children}
    </button>
  );
}
