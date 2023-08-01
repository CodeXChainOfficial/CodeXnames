import React from "react";

import { Text } from "components";

type SolnamesChooseTokenToConnectWithStatus1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "frame163306"
  | "selectawallet"
  | "frame163306one"
  | "choosetokento"
  | "frame163307"
  | "reviewitem"
> &
  Partial<{
    frame163306: string;
    selectawallet: string;
    frame163306one: string;
    choosetokento: string;
    frame163307: string;
    reviewitem: string;
  }>;

const SolnamesChooseTokenToConnectWithStatus1: React.FC<
  SolnamesChooseTokenToConnectWithStatus1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
          <Text
            className="bg-light_blue-A700 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_03 text-xs w-6"
            size="txtInterBold12Gray90003"
          >
            {props?.frame163306}
          </Text>
          <Text
            className="text-center text-lg text-white-A700 w-auto"
            size="txtInterSemiBold18WhiteA700"
          >
            {props?.selectawallet}
          </Text>
        </div>
        <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
          <Text
            className="bg-light_blue-A700_35 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_03 text-xs w-6"
            size="txtInterBold12Gray90003"
          >
            {props?.frame163306one}
          </Text>
          <Text
            className="text-center text-lg text-white-A700 w-auto"
            size="txtInterSemiBold18WhiteA700"
          >
            {props?.choosetokento}
          </Text>
        </div>
        <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
          <Text
            className="bg-light_blue-A700_35 flex h-6 items-center justify-center rounded-[50%] text-center text-gray-900_03 text-xs w-6"
            size="txtInterBold12Gray90003"
          >
            {props?.frame163307}
          </Text>
          <Text
            className="text-center text-lg text-white-A700 w-auto"
            size="txtInterSemiBold18WhiteA700"
          >
            {props?.reviewitem}
          </Text>
        </div>
      </div>
    </>
  );
};

SolnamesChooseTokenToConnectWithStatus1.defaultProps = {
  frame163306: "1",
  selectawallet: "Select a wallet",
  frame163306one: "2",
  choosetokento: "Choose token to connect with",
  frame163307: "3",
  reviewitem: "Review item",
};

export default SolnamesChooseTokenToConnectWithStatus1;
