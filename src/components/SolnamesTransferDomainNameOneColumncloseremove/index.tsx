import React from "react";

import { Button, Img, Text } from "components";

type SolnamesTransferDomainNameOneColumncloseremoveProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "transfersuccessOne"
  | "transfermessage"
  | "viewtransactionhistorybutton"
  | "donebutton"
> &
  Partial<{
    transfersuccessOne: string;
    transfermessage: JSX.Element | string;
    viewtransactionhistorybutton: string;
    donebutton: string;
  }>;

const SolnamesTransferDomainNameOneColumncloseremove: React.FC<
  SolnamesTransferDomainNameOneColumncloseremoveProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 h-[73px] md:h-auto items-center justify-between w-[543px] sm:w-full">
          <div className="flex flex-col items-center justify-center w-[248px]">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              {props?.transfersuccessOne}
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
        <Img
          className="h-[252px] w-[336px]"
          src="images/img_undrawastronautre8c33.svg"
          alt="undrawastronaut"
        />
        <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
          {props?.transfermessage}
          <div className="flex flex-row gap-1.5 items-center justify-center sm:px-5 px-6 py-4 rounded-[22px] w-auto">
            <Text
              className="text-base text-center text-light_blue-A700 w-auto"
              size="txtInterBold16LightblueA700"
            >
              {props?.viewtransactionhistorybutton}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright_light_blue_a700.svg"
              alt="arrowright"
            />
          </div>
          <Button className="border border-light_blue-A700 border-solid cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]">
            {props?.donebutton}
          </Button>
        </div>
      </div>
    </>
  );
};

SolnamesTransferDomainNameOneColumncloseremove.defaultProps = {
  transfersuccessOne: "Transfer Successful",
  transfermessage: (
    <Text
      className="leading-[24.00px] max-w-[408px] md:max-w-full text-center text-gray-500 text-shadow-ts text-sm"
      size="txtInterMedium14Gray500"
    >
      <span className="text-gray-500 font-inter font-medium">
        This transfer was successfully done and{" "}
      </span>
      <span className="text-light_blue-A700 font-inter font-medium">
        Ahmad.codex{" "}
      </span>
      <span className="text-gray-500 font-inter font-medium">
        now belongs to{" "}
      </span>
      <span className="text-white-A700 font-inter font-normal">
        0X347DHJ79WBSUR73BhJv8hjn
      </span>
      <span className="text-white-A700 font-inter font-medium"> </span>
    </Text>
  ),
  viewtransactionhistorybutton: "View transaction history",
  donebutton: "Done",
};

export default SolnamesTransferDomainNameOneColumncloseremove;
