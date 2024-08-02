import {
  AppleBag,
  Bag,
  Bin,
  Bottles,
  CleanBottle,
  CoffeeCup,
  Juice,
  Knuckles,
  Plastic,
  RecyclingBox,
  Sandwich,
  Toy,
  TrashWide,
} from "../assets/illustrations";
import Button from "./Button";

export default function FooterBanner() {
  return (
    <div className="px-[4.65%] md:px-[12.5%] bg-[#4fd2551a] flex flex-col md:gap-[8.16rem] pt-[12.5rem]">
      <div className="flex flex-col md:flex-row w-full gap-20 max-md:min-h-[40rem] md:gap-[9.81rem] ">
        <div className="flex flex-col gap-10 md:max-w-[27.125rem] w-full">
          <span className="flex flex-col w-full gap-4">
            <strong className="text-[#333] text-3xl md:text-[4.5rem] font-bold md:leading-[5.25rem]">
              Ready to Get Started?
            </strong>
            <p className="text-[#727272] text-base md:text-lg md:leading-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </span>

          <Button />
        </div>

        <div className="flex items-center flex-row w-full relative justify-between">
          <img
            src={CleanBottle}
            alt={"recyclr - clean bottles"}
            width={94}
            height={94}
            className="w-[3.875rem] md:w-[5.875rem] animate-hover absolute -top-6 md:top-20 h-[3.875rem] md:h-[5.875rem]"
          />
          <img
            src={AppleBag}
            alt={"recyclr - apple bag"}
            width={110}
            height={110}
            className="w-[3.875rem] md:w-[6.875rem] animate-hovermd  left-[3.69rem] md:left-[5.69rem] absolute max-md:top-16 md:-bottom-12 h-[3.875rem] md:h-[6.875rem]"
          />
          <img
            src={Plastic}
            alt={"recyclr - plastic"}
            width={52}
            height={52}
            className="w-[2.25rem] md:w-[3.25rem] animate-hoversm left-[8.45rem] md:left-[16.45rem] relative top-2 md:top-[2.81rem] h-[2.25rem] md:h-[3.25rem]"
          />
          <img
            src={Sandwich}
            alt={"recyclr - sandwich"}
            width={89.7}
            height={89.7}
            className="w-[3.60606rem] md:w-[5.60606rem] animate-hovermd  left-[10.97rem] md:left-[24.97rem] absolute max-md:top-24 md:-bottom-24  h-[3.60606rem] md:h-[5.60606rem]"
          />
          <img
            src={Knuckles}
            alt={"recyclr - knuckles"}
            width={66}
            height={66}
            className="w-[3.125rem] md:w-[4.125rem] animate-hover  left-[6.96rem] md:left-[6.96rem] relative -top-10 h-[3.125rem] md:h-[4.125rem]"
          />

          <img
            src={CoffeeCup}
            alt={"recyclr - coffee cup"}
            width={98.7}
            height={98.7}
            className="w-[3.1295rem] md:w-[6.1295rem] animate-hoversm  right-1 md:right-[6.96rem] top-8 md:top-20 relative h-[3.1295rem] md:h-[6.1295rem]"
          />
        </div>
      </div>

      <div className="flex items-end justify-between w-full">
        <span className="flex items-end">
          <img
            src={Toy}
            alt={"recyclr - toy"}
            width={100}
            height={100}
            className="w-[3.25rem] md:w-[6.25rem] h-[3.25rem] md:h-[6.25rem]"
          />
          <img
            src={TrashWide}
            alt={"recyclr - trash wide"}
            width={235}
            height={235}
            className="w-[4.6875rem] h-[4.6875rem] md:w-[14.6875rem] md:h-[14.6875rem]"
          />
        </span>

        <span className="flex items-end">
          <img
            src={Bag}
            alt={"recyclr - bag"}
            width={45.48}
            height={45.48}
            className="w-[2.84256rem] animate-hover relative -top-[6.37rem] max-md:left-8 md:right-[0.8rem] h-[2.84256rem]"
          />
          <img
            src={RecyclingBox}
            alt={"recyclr - recycling box"}
            width={106}
            height={106}
            className="w-[3.625rem] h-[3.625rem] md:w-[6.625rem] md:h-[6.625rem]"
          />
          <img
            src={Bottles}
            alt={"recyclr - bottles"}
            width={118}
            height={118}
            className="w-[3.375rem] h-[3.375rem] md:w-[7.375rem] md:h-[7.375rem]"
          />
          <img
            src={Juice}
            alt={"recyclr - juice"}
            width={70}
            height={70}
            className="w-[2.375rem] h-[2.375rem] md:w-[4.375rem] md:h-[4.375rem]"
          />
        </span>

        <img
          src={Bin}
          alt={"recyclr - trash wide"}
          width={176}
          height={176}
          className="w-[8rem] h-[8rem] md:w-[11rem] md:h-[11rem]"
        />
      </div>
    </div>
  );
}
