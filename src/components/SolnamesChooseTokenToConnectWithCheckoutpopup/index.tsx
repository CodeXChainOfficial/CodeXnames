import React from "react";

import { Button, Line, Text } from "components";

type SolnamesChooseTokenToConnectWithCheckoutpopupProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ordersummary"
  | "subtotal"
  | "languageOne"
  | "gastoll"
  | "cdxcounter"
  | "total"
  | "price"
  | "cdxcounter1"
  | "checkout"
> &
  Partial<{
    ordersummary: string;
    subtotal: string;
    languageOne: string;
    gastoll: string;
    cdxcounter: string;
    total: string;
    price: string;
    cdxcounter1: string;
    checkout: string;
  }>;

const SolnamesChooseTokenToConnectWithCheckoutpopup: React.FC<
  SolnamesChooseTokenToConnectWithCheckoutpopupProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-center justify-start w-auto">
          <div className="flex flex-col gap-10 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterBold20"
            >
              {props?.ordersummary}
            </Text>
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Line className="bg-gray-900_15 h-px w-[98%]" />
              <div className="flex flex-col gap-4 items-start justify-start p-2.5 w-auto">
                <div className="flex flex-row gap-[213px] items-start justify-between w-auto">
                  <Text
                    className="text-base text-gray-500_02 w-auto"
                    size="txtInterMedium16Gray50002"
                  >
                    {props?.subtotal}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    {props?.languageOne}
                  </Text>
                </div>
                <div className="flex flex-row gap-[106px] items-start justify-start w-[311px]">
                  <Text
                    className="text-base text-gray-500_02 w-auto"
                    size="txtInterMedium16Gray50002"
                  >
                    {props?.gastoll}
                  </Text>
                  <Text
                    className="text-right text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.cdxcounter}
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-900_15 h-px w-[98%]" />
              <div className="flex flex-row items-center justify-between w-[311px]">
                <Text
                  className="text-base text-gray-500_02 w-auto"
                  size="txtInterMedium16Gray50002"
                >
                  {props?.total}
                </Text>
                <div className="flex flex-col gap-4 items-end justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.price}
                  </Text>
                  <Text
                    className="text-right text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.cdxcounter1}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-light_blue-A700_4c cursor-pointer font-bold font-inter py-[18px] rounded-[28px] text-base text-center text-gray-900_03 w-[270px]">
            {props?.checkout}
          </Button>
        </div>
      </div>
    </>
  );
};

SolnamesChooseTokenToConnectWithCheckoutpopup.defaultProps = {
  ordersummary: "Order Summary",
  subtotal: "Subtotal",
  languageOne: "25 ",
  gastoll: "Gas toll",
  cdxcounter: "0.07 CDX",
  total: "Total",
  price: "25 USDC",
  cdxcounter1: "0.07 CDX",
  checkout: "Check Out",
};

export default SolnamesChooseTokenToConnectWithCheckoutpopup;
