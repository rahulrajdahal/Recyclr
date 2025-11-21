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
import Button from "./Button/Button";

export default function FooterBanner() {
  return (
    <div className="px-[4.65%] md:px-[12.5%] bg-[#4fd2551a] flex flex-col md:gap-[8.16rem] pt-50">
      <div className="flex flex-col md:flex-row w-full gap-20 max-md:min-h-160 md:gap-[9.81rem] ">
        <div className="flex flex-col gap-10 md:max-w-108.5 w-full">
          <span className="flex flex-col w-full gap-4">
            <strong className="text-[#333] text-3xl md:text-[4.5rem] font-bold md:leading-21">
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
            className="w-15.5 md:w-23.5 animate-hover absolute -top-6 md:top-20 h-15.5 md:h-23.5"
          />
          <img
            src={AppleBag}
            alt={"recyclr - apple bag"}
            width={110}
            height={110}
            className="w-15.5 md:w-27.5 animate-hovermd  left-[3.69rem] md:left-[5.69rem] absolute max-md:top-16 md:-bottom-12 h-15.5 md:h-27.5"
          />
          <img
            src={Plastic}
            alt={"recyclr - plastic"}
            width={52}
            height={52}
            className="w-9 md:w-13 animate-hoversm left-[8.45rem] md:left-[16.45rem] relative top-2 md:top-[2.81rem] h-9 md:h-13"
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
            className="w-12.5 md:w-16.5 animate-hover  left-[6.96rem] md:left-[6.96rem] relative -top-10 h-12.5 md:h-16.5"
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
            className="w-13 md:w-25 h-13 md:h-25"
          />
          <img
            src={TrashWide}
            alt={"recyclr - trash wide"}
            width={235}
            height={235}
            className="w-18.75 h-18.75 md:w-58.75 md:h-58.75"
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
            className="w-14.5 h-14.5 md:w-26.5 md:h-26.5"
          />
          <img
            src={Bottles}
            alt={"recyclr - bottles"}
            width={118}
            height={118}
            className="w-13.5 h-13.5 md:w-29.5 md:h-29.5"
          />
          <img
            src={Juice}
            alt={"recyclr - juice"}
            width={70}
            height={70}
            className="w-9.5 h-9.5 md:w-17.5 md:h-17.5"
          />
        </span>

        <img
          src={Bin}
          alt={"recyclr - trash wide"}
          width={176}
          height={176}
          className="w-32 h-32 md:w-44 md:h-44"
        />
      </div>
    </div>
  );
}
