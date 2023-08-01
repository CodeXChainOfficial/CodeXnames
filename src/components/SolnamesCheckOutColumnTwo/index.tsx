import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Line, Text } from "components";

type SolnamesCheckOutColumnTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ordersummaryOne"
  | "subtotalOne"
  | "ordersubtotal"
  | "gastollOne"
  | "gastoll"
  | "totalOne"
  | "totalprice"
  | "cdxcounter"
  | "checkOutOne"
> &
  Partial<{
    ordersummaryOne: string;
    subtotalOne: string;
    ordersubtotal: string;
    gastollOne: string;
    gastoll: string;
    totalOne: string;
    totalprice: string;
    cdxcounter: string;
    checkOutOne: string;
  }>;

const SolnamesCheckOutColumnTwo: React.FC<SolnamesCheckOutColumnTwoProps> = (
  props,
) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-center justify-start w-auto">
          <div className="flex flex-col gap-10 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterBold20"
            >
              {props?.ordersummaryOne}
            </Text>
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Line className="bg-gray-900_15 h-px w-[98%]" />
              <div className="flex flex-col gap-4 items-start justify-start p-2.5 w-auto">
                <div className="flex flex-row gap-[213px] items-start justify-between w-auto">
                  <Text
                    className="text-base text-gray-500_02 w-auto"
                    size="txtInterMedium16Gray50002"
                  >
                    {props?.subtotalOne}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    {props?.ordersubtotal}
                  </Text>
                </div>
                <div className="flex flex-row gap-[106px] items-start justify-start w-[311px]">
                  <Text
                    className="text-base text-gray-500_02 w-auto"
                    size="txtInterMedium16Gray50002"
                  >
                    {props?.gastollOne}
                  </Text>
                  <Text
                    className="text-right text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.gastoll}
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-900_15 h-px w-[98%]" />
              <div className="flex flex-row items-center justify-between w-[311px]">
                <Text
                  className="text-base text-gray-500_02 w-auto"
                  size="txtInterMedium16Gray50002"
                >
                  {props?.totalOne}
                </Text>
                <div className="flex flex-col gap-4 items-end justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.totalprice}
                  </Text>
                  <Text
                    className="text-right text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.cdxcounter}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="common-pointer bg-light_blue-A700 cursor-pointer font-bold font-inter py-[18px] rounded-[28px] text-base text-center text-gray-900_03 w-[270px]"
            onClick={() => navigate("/solnamesreviewitem")}
          >
            {props?.checkOutOne}
          </Button>
        </div>
      </div>
    </>
  );
};

SolnamesCheckOutColumnTwo.defaultProps = {
  ordersummaryOne: "Order Summary",
  subtotalOne: "Subtotal",
  ordersubtotal: "25 ",
  gastollOne: "Gas toll",
  gastoll: "0.07 CDX",
  totalOne: "Total",
  totalprice: "25 USDC",
  cdxcounter: "0.07 CDX",
  checkOutOne: "Check Out",
};

export default SolnamesCheckOutColumnTwo;
