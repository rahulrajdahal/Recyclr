import React from "react";

type BaseIconContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** background color of the icon container */
  bg?: string;
};

type IconStringProps = BaseIconContainerProps &
  IconProps & {
    imgProps?: Omit<IconProps, "icon" | "color">;
  };

type IconNodeProps = BaseIconContainerProps & {
  /** icon in the IconContainer */
  icon: React.ReactNode;
};

type IconContainerProps = IconStringProps | IconNodeProps;

export default function IconContainer({
  icon,
  bg = "#ea433533",
  ...props
}: IconContainerProps) {
  const isIconString = typeof icon === "string";

  const renderIcon = () => {
    if (isIconString) {
      return (
        <Icon
          icon={icon}
          color={props?.color}
          {...("imgProps" in props ? props?.imgProps : null)}
        />
      );
    } else {
      return icon;
    }
  };

  return (
    <div
      {...props}
      className={`rounded-[1.75rem] p-[1.62rem] ${props.className ?? ""}`}
      style={{ ...props.style, backgroundColor: bg }}
    >
      {renderIcon()}
    </div>
  );
}

type IconProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  /** icon in the IconContainer */
  icon: string;
  /** color of the icon */
  color?: string;
};

const Icon = ({ icon, color, ...props }: IconProps) => {
  return (
    <img
      {...props}
      src={icon}
      alt={props?.alt ?? "recyclr - delete bin"}
      width={props?.width ?? 32}
      height={props?.height ?? 32}
      className={`w-8 h-8 ${props?.className ?? ""}`}
      style={{ ...props?.style, color }}
    />
  );
};
