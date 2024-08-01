import { ComponentPropsWithoutRef } from "react";

interface IconContainerProps extends ComponentPropsWithoutRef<"div"> {
  icon: string;
  imgProps?: ComponentPropsWithoutRef<"img">;
}
export default function IconContainer({
  icon,
  imgProps,
  ...props
}: Readonly<IconContainerProps>) {
  return (
    <div
      {...props}
      className={`rounded-[1.75rem] p-[1.62rem] ${props.className}`}
    >
      <img
        {...imgProps}
        src={icon}
        alt={"recyclr - delete bin"}
        width={32}
        height={32}
        className="w-8 h-8 text-[#EA4335]"
      />
    </div>
  );
}
