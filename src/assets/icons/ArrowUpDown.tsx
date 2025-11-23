import { IconProps } from "./DeleteBin";

export default function ArrowUpDown({ ...props }: Readonly<IconProps>) {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7_34)">
        <path
          d="M16 10.6667H10.668L10.6667 26.6667H8.00001V10.6667H2.66667L9.33334 4L16 10.6667ZM29.3333 21.3333L22.6667 28L16 21.3333H21.3333V5.33333H24V21.3333H29.3333Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_34">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
