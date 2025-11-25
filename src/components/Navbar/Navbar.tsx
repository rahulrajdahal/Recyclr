import { Logo, Menu } from "../../assets/icons";
import { useWindowSize } from "../../hooks";
import Button from "../Button/Button";

const links = [
  { id: 1, title: "Services" },
  { id: 2, title: "About" },
  { id: 3, title: "Contact" },
];

export default function Navbar() {
  const { width } = useWindowSize();

  return (
    <nav
      data-testid="recyclr-navbar"
      className="sticky py-15 z-50 top-0 bg-white px-[12.5%] flex items-center justify-between h-full w-full max-h-45"
    >
      <a href={"#main"} className="flex items-center gap-2">
        <img
          src={Logo}
          alt="recyclr - logo"
          width={30}
          height={30}
          className="w-7.5 h-7.5"
        />

        <strong className="text-[#333] text-2xl leading-normal font-bold">
          Recyclr
        </strong>
      </a>

      {width < 960 ? (
        <a href="#home">
          <img
            src={Menu}
            alt="recyclr - menu"
            width={30}
            height={30}
            className="w-7.5 h-7.5"
          />
        </a>
      ) : (
        <div className="flex items-center gap-15">
          <ul className="flex gap-15 items-center">
            {links.map(({ id, title }) => (
              <li
                key={id}
                className="text-[#333] text-lg leading-normal font-semibold"
              >
                {title}
              </li>
            ))}
          </ul>
          <a href={"#contact"}>
            <Button>Start Recycling</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
