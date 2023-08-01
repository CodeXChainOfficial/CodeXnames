import React from "react";

import { Button, Img, Input, Text } from "components";

type SolnamesExtendDomainNameOneColumnFourProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "domainname"
  | "confirmdetails"
  | "weburl"
  | "ahmad"
  | "codex"
  | "to"
  | "address"
  | "contractname"
  | "action"
  | "action1"
  | "fee"
  | "fee1"
  | "data"
  | "confirm"
  | "cancel"
> &
  Partial<{
    domainname: string;
    confirmdetails: string;
    weburl: string;
    ahmad: string;
    codex: string;
    to: string;
    address: string;
    contractname: string;
    action: string;
    action1: string;
    fee: string;
    fee1: JSX.Element | string;
    data: string;
    confirm: string;
    cancel: string;
  }>;

const SolnamesExtendDomainNameOneColumnFour: React.FC<
  SolnamesExtendDomainNameOneColumnFourProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-auto">
          <div className="flex flex-col items-center justify-start w-auto sm:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                size="txtInterMedium32"
              >
                {props?.domainname}
              </Text>
              <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_closeremove.svg"
                  alt="closeremove"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[33px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-[379px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-100_03 sm:text-xl w-auto"
                      size="txtInterSemiBold24Bluegray10003"
                    >
                      {props?.confirmdetails}
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_07 flex flex-row gap-4 items-center justify-start p-4 rounded-lg w-[555px] sm:w-full">
                  <div className="flex flex-col h-[69px] md:h-auto items-start justify-start w-auto">
                    <Text
                      className="bg-cover bg-no-repeat h-[66px] pl-[18px] sm:pr-5 pr-[30px] py-[29px] rounded-[3px] text-[5.45px] text-white-A700 w-auto"
                      size="txtInterBold545"
                      style={{
                        backgroundImage: "url('images/img_frame163262_1.png')",
                      }}
                    >
                      {props?.weburl}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-300 sm:text-xl tracking-[-0.72px] w-auto"
                      size="txtInterSemiBold24Gray300"
                    >
                      {props?.ahmad}
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-600_01 sm:text-xl tracking-[-0.72px] w-auto"
                      size="txtInterSemiBold24Gray60001"
                    >
                      {props?.codex}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[555px] sm:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-[550px] sm:w-full">
                  <Text
                    className="text-gray-500 text-xs"
                    size="txtInterRegular12Gray500"
                  >
                    {props?.to}
                  </Text>
                  <div className="flex flex-col gap-1 items-start justify-start w-[550px] sm:w-full">
                    <Text
                      className="text-base text-blue_gray-100_03 w-auto"
                      size="txtInterRegular16Bluegray10003"
                    >
                      {props?.address}
                    </Text>
                    <Text
                      className="text-gray-600_01 text-xs w-full"
                      size="txtInterRegular12Gray60001"
                    >
                      {props?.contractname}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1 h-full items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-xs w-full"
                      size="txtInterRegular12Gray500"
                    >
                      {props?.action}
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-100_03 w-auto"
                        size="txtInterRegular16Bluegray10003"
                      >
                        {props?.action1}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-gray-500 text-xs w-full"
                    size="txtInterRegular12Gray500"
                  >
                    {props?.fee}
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    {props?.fee1}
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[541px] sm:w-full">
                  <Text
                    className="text-gray-500 text-xs w-full"
                    size="txtInterRegular12Gray500"
                  >
                    {props?.data}
                  </Text>
                  <Input
                    name="textarea"
                    placeholder="N/A"
                    className="font-inter p-0 placeholder:text-blue_gray-100_03 sm:pr-5 text-base text-blue_gray-100_03 text-left w-full"
                    wrapClassName="border border-gray-900_07 border-solid pb-[35px] pl-3 pr-[35px] pt-2 rounded-md w-full"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[22px] items-start justify-start w-auto sm:w-full">
                <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[554px]">
                  {props?.confirm}
                </Button>
                <Button className="border border-light_blue-A700 border-solid cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]">
                  {props?.cancel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesExtendDomainNameOneColumnFour.defaultProps = {
  domainname: "Extend Domain Name",
  confirmdetails: "Confirm Details",
  weburl: "Ahmad.codex",
  ahmad: "Ahmad",
  codex: ".codex",
  to: "To",
  address: "erd1ijg49ewv8bwh9g4290ckjas9j498fhjw3e02fgwq90hgj5390fq23e0gh",
  contractname: "CodeXs Names Smart Contract",
  action: "Action",
  action1: "Removing subdomain",
  fee: "Fee",
  fee1: (
    <Text className="text-gray-600_01 text-xs w-auto" size="txtInterLight12">
      <span className="text-gray-600_01 font-inter text-left font-light">
        ~
      </span>
      <span className="text-gray-600_01 font-inter text-left font-normal">
        0.00023 CDX
      </span>
    </Text>
  ),
  data: "Data",
  confirm: "Confirm",
  cancel: "Cancel ",
};

export default SolnamesExtendDomainNameOneColumnFour;
