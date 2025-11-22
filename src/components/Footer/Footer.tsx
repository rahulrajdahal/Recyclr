import { Facebook, Twitter, Youtube } from "../../assets/icons";

const socials = [
  { id: 1, title: "Facebook", icon: Facebook },
  { id: 2, title: "Twitter", icon: Twitter },
  { id: 3, title: "Youtube", icon: Youtube },
];

export default function Footer() {
  return (
    <footer
      data-testid="test-footer"
      className="bg-[#121212] px-[4.65%] xl:px-[12.5%] w-full flex py-10 items-start justify-between flex-col md:items-center sm:flex-row gap-10"
    >
      <p className="text-white text-base lg:text-lg leading-6 font-semibold">
        Copyright. 2020. All Rights Reserved.
      </p>

      <div className="flex items-center gap-[1.06rem]">
        {socials.map(({ id, icon, title }) => (
          <img
            key={id}
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="w-full h-3 md:h-6"
          />
        ))}
      </div>
    </footer>
  );
}
