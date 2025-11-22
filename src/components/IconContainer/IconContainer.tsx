type IconContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** icon in the IconContainer */
  icon: string;
  /** props for icon | Image Props */
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  /** background color of the icon container */
  bg?: string;
  /** color of the icon */
  color?: string;
};
export default function IconContainer({
  icon,
  imgProps,
  bg = "#ea433533",
  color = "#EA4335",
  ...props
}: IconContainerProps) {
  return (
    <div
      {...props}
      className={`rounded-[1.75rem] p-[1.62rem] ${props.className ?? ""}`}
      style={{ ...props.style, backgroundColor: bg }}
    >
      <img
        {...imgProps}
        src={icon}
        alt={imgProps?.alt ?? "recyclr - delete bin"}
        width={imgProps?.width ?? 32}
        height={imgProps?.height ?? 32}
        className={`w-8 h-8 ${imgProps?.className ?? ""}`}
        style={{ ...imgProps?.style, color }}
      />
    </div>
  );
}
