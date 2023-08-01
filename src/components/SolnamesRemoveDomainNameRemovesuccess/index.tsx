import React from "react";

import { Button, Img, Text } from "components";

type SolnamesRemoveDomainNameRemovesuccessProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "removesuccessfultext" | "domainsuccesstext" | "continuebutton"
> &
  Partial<{
    removesuccessfultext: string;
    domainsuccesstext: string;
    continuebutton: string;
  }>;

const SolnamesRemoveDomainNameRemovesuccess: React.FC<
  SolnamesRemoveDomainNameRemovesuccessProps
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
              {props?.removesuccessfultext}
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
          alt="successimage"
        />
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto sm:w-full">
          <Text
            className="text-center text-gray-500 text-sm w-auto"
            size="txtInterMedium14Gray500"
          >
            {props?.domainsuccesstext}
          </Text>
          <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[459px]">
            {props?.continuebutton}
          </Button>
        </div>
      </div>
    </>
  );
};

SolnamesRemoveDomainNameRemovesuccess.defaultProps = {
  removesuccessfultext: "Remove Successful",
  domainsuccesstext: "The domain is success removed",
  continuebutton: "Continue",
};

export default SolnamesRemoveDomainNameRemovesuccess;
