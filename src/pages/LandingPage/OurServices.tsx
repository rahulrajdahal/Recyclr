import { ArrowUpDown, DeleteBin, UserSmile } from "../../assets/icons";
import { IconContainer } from "../../components";

const services = [
  {
    id: 1,
    icon: <DeleteBin color="#EA4335" />,
    title: "Reduce",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    bg: "#ea433533",
  },
  {
    id: 2,
    icon: <UserSmile color={"#234285F4"} />,
    title: "Reuse",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    bg: "#4285f433",
  },
  {
    id: 3,
    icon: <ArrowUpDown color="#23FBBC05" />,
    title: "Recycle",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    bg: "#fbbc0533",
  },
];
export default function OurServices() {
  return (
    <div className="flex mb-35 flex-col items-center gap-15 justify-center">
      <span className="flex flex-col gap-3 items-center">
        <strong className="text-[#333] text-center text-5xl leading-12 font-bold">
          Our Services
        </strong>
        <p className="text-[#727272] text-center text-lg leading-6 font-medium">
          Learn about our awesome services for making the world a better place
        </p>
      </span>

      <div className="grid gap-x-40 gap-y-15 grid-cols-1 max-md:px-4 md:grid-cols-2 place-items-center">
        {services.map(({ id, body, icon, title, bg }) => (
          <div key={id} className="flex gap-4 items-center">
            <IconContainer icon={icon} bg={bg} />
            <span className="flex flex-col gap-2">
              <strong className="text-[#333] text-2xl leading-6 font-bold">
                {title}
              </strong>
              <p className="max-w-73.75 text-[#727272] text-base leading-5 font-medium">
                {body}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
