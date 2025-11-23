import React from "react";

type IconContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** icon in the IconContainer */
  icon: React.ReactNode;
  /** background color of the icon container */
  bg?: string;
};

export default function IconContainer({
  icon,
  bg = "#ea433533",
  ...props
}: IconContainerProps) {
  return (
    <div
      data-testid="recyclr-iconContainer"
      {...props}
      className={`rounded-[1.75rem] flex items-center justify-center p-[1.62rem] ${props.className ?? ""}`}
      style={{ ...props.style, backgroundColor: bg }}
    >
      {icon}
    </div>
  );
}
