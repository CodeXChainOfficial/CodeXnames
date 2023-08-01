import React from "react";

import { Button, Img, Line, Text } from "components";

type SolnamesTransferDomainNameColumncloseremoveProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "transactionapprOne"
  | "transactionmessage"
  | "estimatedbalancechangestext"
  | "nobalancechangestext"
  | "networkfee"
  | "networkfeetext"
  | "approvetransferbutton"
  | "cancelbutton"
> &
  Partial<{
    transactionapprOne: string;
    transactionmessage: JSX.Element | string;
    estimatedbalancechangestext: string;
    nobalancechangestext: string;
    networkfee: string;
    networkfeetext: string;
    approvetransferbutton: string;
    cancelbutton: string;
  }>;

const SolnamesTransferDomainNameColumncloseremove: React.FC<
  SolnamesTransferDomainNameColumncloseremoveProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 gap-[225px] h-[73px] md:h-auto items-center justify-between w-auto sm:w-full">
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              {props?.transactionapprOne}
            </Text>
          </div>
          <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_closeremove.svg"
              alt="closeremove"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-auto sm:w-full">
          {props?.transactionmessage}
        </div>
        <div className="bg-gray-900_07 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md w-[528px] sm:w-full">
          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row items-center justify-between py-2.5 w-[480px] sm:w-full">
                <Text
                  className="leading-[25.00px] max-w-[181px] md:max-w-full text-base text-gray-500"
                  size="txtInterMedium16Gray500"
                >
                  {props?.estimatedbalancechangestext}
                </Text>
                <Img
                  className="h-5 w-[22px]"
                  src="images/img_warning_gray_100.svg"
                  alt="warning"
                />
              </div>
              <div className="flex flex-col items-center justify-between w-[480px] sm:w-full">
                <div className="flex flex-col items-center justify-start py-2.5 w-[206px]">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtInterMedium16Gray500"
                  >
                    {props?.nobalancechangestext}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between py-2.5 w-[480px] sm:w-full">
                <Text
                  className="text-base text-gray-500 w-[93px]"
                  size="txtInterMedium16Gray500"
                >
                  {props?.networkfee}
                </Text>
                <Text
                  className="text-base text-right text-white-A700 w-auto"
                  size="txtInterRegular16"
                >
                  {props?.networkfeetext}
                </Text>
              </div>
              <Line className="bg-gray-900_07 h-0.5 w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[22px] items-start justify-start w-auto sm:w-full">
          <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[554px]">
            {props?.approvetransferbutton}
          </Button>
          <Button className="border border-light_blue-A700 border-solid cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]">
            {props?.cancelbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

SolnamesTransferDomainNameColumncloseremove.defaultProps = {
  transactionapprOne: "Transaction Approval",
  transactionmessage: (
    <Text
      className="leading-[25.00px] max-w-[511px] md:max-w-full text-base text-center text-white-A700"
      size="txtInterRegular16"
    >
      <span className="text-white-A700 font-inter font-normal">
        Once transfer is approved,{" "}
      </span>
      <span className="text-light_blue-A700 font-inter font-normal">
        Ahmad.codex
      </span>
      <span className="text-white-A700 font-inter font-normal">
        {" "}
        will permanently be transferred to the new owner.
      </span>
    </Text>
  ),
  estimatedbalancechangestext: "Estimated Balance Changes",
  nobalancechangestext: "No Balance Changes found",
  networkfee: "Network fee",
  networkfeetext: "0.00023 CDX",
  approvetransferbutton: "Approve Transfer",
  cancelbutton: "Cancel ",
};

export default SolnamesTransferDomainNameColumncloseremove;
