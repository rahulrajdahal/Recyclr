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

export default function FooterBanner() {
  return (
    <div className="px-[12.5%] flex flex-col gap-[8.16rem] pt-[12.5rem]">
      <div className="flex gap-[9.81rem] ">
        <div className="flex flex-col gap-10 max-w-[27.125rem] w-full">
          <span className="flex flex-col gap-4">
            <strong className="text-[#333] text-[4.5rem] font-bold leading-[5.25rem]">
              Ready to Get Started?
            </strong>
            <p className="text-[#727272] text-lg leading-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </span>

          <button className=" bg-[#4FD255] rounded-[0.875rem] max-h-[3.75rem] w-fit px-[2.94rem] py-5 h-full text-[#333] text-lg leading-normal font-semibold">
            Start Recycling
          </button>
        </div>

        <div className="flex items-center flex-row w-full relative justify-between">
          <img
            src={CleanBottle}
            alt={"recyclr - clean bottles"}
            width={94}
            height={94}
            className="w-[5.875rem]  absolute top-20 h-[5.875rem]"
          />
          <img
            src={AppleBag}
            alt={"recyclr - apple bag"}
            width={110}
            height={110}
            className="w-[6.875rem] left-[5.69rem] absolute -bottom-12 h-[6.875rem]"
          />
          <img
            src={Plastic}
            alt={"recyclr - plastic"}
            width={52}
            height={52}
            className="w-[3.25rem] left-[16.45rem] relative top-[2.81rem] h-[3.25rem]"
          />
          <img
            src={Sandwich}
            alt={"recyclr - sandwich"}
            width={89.7}
            height={89.7}
            className="w-[5.60606rem] left-[24.97rem] absolute -bottom-24  h-[5.60606rem]"
          />
          <img
            src={Knuckles}
            alt={"recyclr - knuckles"}
            width={66}
            height={66}
            className="w-[4.125rem] left-[6.96rem] relative -top-10 h-[4.125rem]"
          />

          <img
            src={CoffeeCup}
            alt={"recyclr - coffee cup"}
            width={98.7}
            height={98.7}
            className="w-[6.1295rem] right-[6.96rem] top-20 relative h-[6.1295rem]"
          />
        </div>
      </div>

      <div className="flex items-end justify-between">
        <span className="flex items-end">
          <img
            src={Toy}
            alt={"recyclr - toy"}
            width={100}
            height={100}
            className="w-[6.25rem] h-[6.25rem]"
          />
          <img
            src={TrashWide}
            alt={"recyclr - trash wide"}
            width={235}
            height={235}
            className="w-[14.6875rem] h-[14.6875rem]"
          />
        </span>

        <span className="flex items-end">
          <img
            src={Bag}
            alt={"recyclr - bag"}
            width={45.48}
            height={45.48}
            className="w-[2.84256rem] relative -top-[6.37rem] right-[0.8rem] h-[2.84256rem]"
          />
          <img
            src={RecyclingBox}
            alt={"recyclr - recycling box"}
            width={106}
            height={106}
            className="w-[6.625rem] h-[6.625rem]"
          />
          <img
            src={Bottles}
            alt={"recyclr - bottles"}
            width={118}
            height={118}
            className="w-[7.375rem] h-[7.375rem]"
          />
          <img
            src={Juice}
            alt={"recyclr - juice"}
            width={70}
            height={70}
            className="w-[4.375rem] h-[4.375rem]"
          />
        </span>

        <img
          src={Bin}
          alt={"recyclr - trash wide"}
          width={176}
          height={176}
          className="w-[11rem] h-[11rem]"
        />
      </div>
    </div>
  );
}