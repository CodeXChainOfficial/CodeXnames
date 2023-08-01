import React from "react";

import { Input, Text } from "components";

type SolnamesRemoveSubdomainSubdomaininfoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "to"
  | "recipientaddress"
  | "addresslabel"
  | "action"
  | "actiondescription"
  | "fee"
  | "feeamount"
  | "data"
> &
  Partial<{
    to: string;
    recipientaddress: string;
    addresslabel: string;
    action: string;
    actiondescription: string;
    fee: string;
    feeamount: JSX.Element | string;
    data: string;
  }>;

const SolnamesRemoveSubdomainSubdomaininfo: React.FC<
  SolnamesRemoveSubdomainSubdomaininfoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
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
              {props?.recipientaddress}
            </Text>
            <Text
              className="text-gray-600_01 text-xs w-full"
              size="txtInterRegular12Gray60001"
            >
              {props?.addresslabel}
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
                {props?.actiondescription}
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
            {props?.feeamount}
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
    </>
  );
};

SolnamesRemoveSubdomainSubdomaininfo.defaultProps = {
  to: "To",
  recipientaddress:
    "erd1ijg49ewv8bwh9g4290ckjas9j498fhjw3e02fgwq90hgj5390fq23e0gh",
  addresslabel: "CodeX Smart Contract",
  action: "Action",
  actiondescription: "Removing subdomain",
  fee: "Fee",
  feeamount: (
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
};

export default SolnamesRemoveSubdomainSubdomaininfo;
