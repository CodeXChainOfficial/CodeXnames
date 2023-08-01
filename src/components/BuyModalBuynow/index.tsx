import React from "react";

import { Button, Img, Text } from "components";

type BuyModalBuynowProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "buynowOne"
  | "priceOne"
  | "total"
  | "cdxamount"
  | "youllbeasked"
  | "connectwallet"
> &
  Partial<{
    buynowOne: string;
    priceOne: JSX.Element | string;
    total: string;
    cdxamount: JSX.Element | string;
    youllbeasked: string;
    connectwallet: string;
  }>;

const BuyModalBuynow: React.FC<BuyModalBuynowProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-center w-[427px]">
          <div className="flex flex-col gap-4 items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_lock_white_a700.svg"
                  alt="lock"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-1.20px] w-auto"
                  size="txtInterBold24"
                >
                  {props?.buynowOne}
                </Text>
              </div>
            </div>
            {props?.priceOne}
          </div>
          <div className="border border-solid flex flex-col items-center justify-center light_blue_A700_white_A700_00_border sm:px-5 px-[39px] py-[22px] rounded-[16px] w-[349px]">
            <div className="flex flex-row gap-[66px] items-start justify-start w-auto">
              <Img
                className="h-[109px] md:h-auto object-cover w-[111px]"
                src="images/img_codex12.png"
                alt="codexTwelve_One"
              />
              <div className="flex flex-col gap-[22px] items-end justify-start w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  {props?.total}
                </Text>
                {props?.cdxamount}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_warning_gray_600_03.svg"
                alt="warning"
              />
              <Text
                className="text-base text-gray-600_03 tracking-[-0.80px] w-auto"
                size="txtInterMedium16Gray60003"
              >
                {props?.youllbeasked}
              </Text>
            </div>
            <Button className="bg-light_blue-A700 cursor-pointer font-inter font-semibold h-[72px] py-[25px] rounded-[33px] text-black-900_03 text-center text-lg tracking-[-0.36px] w-[397px]">
              {props?.connectwallet}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

BuyModalBuynow.defaultProps = {
  buynowOne: "Buy Now",
  priceOne: (
    <Text
      className="leading-[137.52%] max-w-[326px] md:max-w-full text-base text-center text-white-A700 tracking-[-0.80px]"
      size="txtInterMedium16WhiteA700"
    >
      <span className="text-white-A700 font-inter font-normal">
        You are about to buy 25. worth of CDX for{" "}
      </span>
      <span className="text-white-A700 font-inter font-normal">
        $20.00 a year.
      </span>
    </Text>
  ),
  total: "Total",
  cdxamount: (
    <Text
      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
      size="txtSpaceGroteskBold32"
    >
      <span className="text-white-A700 font-inter text-left font-bold">25</span>
      <span className="text-white-A700 font-inter text-left text-sm font-normal">
        cdx
      </span>
    </Text>
  ),
  youllbeasked: "You’ll be asked to approve this purchase from your wallet.",
  connectwallet: "connect wallet",
};

export default BuyModalBuynow;
