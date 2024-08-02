import { Logo } from "../assets/icons";
import Button from "./Button";

const links = [
  { id: 1, title: "Services" },
  { id: 2, title: "About" },
  { id: 3, title: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky z-50 top-0 bg-white px-[12.5%] flex items-center justify-between h-full w-full max-h-[11.25rem] py-[3.75rem]">
      <div className="flex items-center gap-2">
        <img
          src={Logo}
          alt="recyclr - logo"
          width={30}
          height={30}
          className="w-[1.875rem] h-[1.875rem]"
        />

        <strong className="text-[#333] text-2xl leading-normal font-bold">
          Recyclr
        </strong>
      </div>

      <div className="flex items-center gap-[3.75rem]">
        <ul className="flex gap-[3.75rem] items-center">
          {links.map(({ id, title }) => (
            <li key={id}>
              <a
                href="#"
                className="text-[#333] text-lg leading-normal font-semibold"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <Button />
      </div>
    </nav>
  );
}
