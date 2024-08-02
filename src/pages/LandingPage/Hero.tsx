import { Mouse } from "../../assets/icons";
import { HeroIllustration } from "../../assets/illustrations";
import { IconContainer } from "../../components";
import { useWindowSize } from "../../hooks";

export default function Hero() {
  const { width } = useWindowSize();

  return (
    <div className="flex relative gap-[8.48rem] px-[12.5%] mb-[8.74rem]">
      <div className="w-full flex gap-10 md:gap-[11.25rem] flex-col max-w-[41.4375rem]">
        <span className="flex flex-col gap-5">
          <strong
            data-greet="Hey"
            className="before:content-[attr(data-greet)] before:text-base lg:before:text-2xl lg:before:leading-5  before:block lg:before:-mb-10 before:ml-1 text-[#333] text-3xl lg:text-[4.5rem] font-bold lg:leading-[8.125rem]"
          >
            Let’s save the world{" "}
            <span className="text-[#4FD255] text-6xl md:text-[8.375rem] uppercase md:leading-[8.125rem] font-extrabold">
              TOGETHER
            </span>
          </strong>
          <p className=" text-[#727272] text-xl md:text-2xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {width < 1440 && (
            <img
              src={HeroIllustration}
              alt="recyclr - hero"
              width={840.48}
              height={591.15}
              className="max-w-[52.53019rem] w-full max-h-[36.94713rem]"
            />
          )}
        </span>

        <span className="flex gap-4 items-center">
          <IconContainer
            icon={Mouse}
            className="animate-hoversm  rounded-[1.1875rem] flex items-center justify-center bg-[#f3f3f3] !p-[1.13rem] max-w-[3.75rem] max-h-[3.75rem]"
            imgProps={{
              alt: "recyclr - scroll",
              className: "w-6 h-6",
            }}
          />
          <p className="text-[#aaa] text-base md:text-lg leading-normal font-semibold">
            Scroll
          </p>
        </span>
      </div>

      {width > 1440 && (
        <img
          src={HeroIllustration}
          alt="recyclr - hero"
          width={840.48}
          height={591.15}
          className="max-w-[52.53019rem] absolute right-10 xl:max-3xl:right-2 xl:max-3xl:w-fit xl:max-3xl:h-[20rem] w-full max-h-[36.94713rem]"
        />
      )}
    </div>
  );
}
