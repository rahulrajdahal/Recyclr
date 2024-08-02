import { ArrowUpDown, DeleteBin, UserSmile } from "../../assets/icons";
import { IconContainer } from "../../components";

const services = [
  {
    id: 1,
    icon: DeleteBin,
    title: "Reduce",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    className: "bg-[#ea433533]",
  },
  {
    id: 2,
    icon: UserSmile,
    title: "Reuse",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    className: "bg-[#4285f433]",
  },
  {
    id: 3,
    icon: ArrowUpDown,
    title: "Recycle",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    className: "bg-[#fbbc0533]",
  },
];
export default function OurServices() {
  return (
    <div className="flex mb-[8.75rem] flex-col items-center gap-[3.75rem] justify-center">
      <span className="flex flex-col gap-3 items-center">
        <strong className="text-[#333] text-5xl leading-[3rem] font-bold">
          Our Services
        </strong>
        <p className="text-[#727272] text-lg leading-6 font-medium">
          Learn about our awesome services for making the world a better place
        </p>
      </span>

      <div className="grid gap-x-40 gap-y-[3.75rem] grid-cols-2 place-items-center">
        {services.map(({ id, body, icon, title, className }) => (
          <div key={id} className="flex gap-4 items-center">
            <IconContainer icon={icon} className={className} />
            <span className="flex flex-col gap-2">
              <strong className="text-[#333] text-2xl leading-6 font-bold">
                {title}
              </strong>
              <p className="max-w-[18.4375rem] text-[#727272] text-base leading-5 font-medium">
                {body}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
