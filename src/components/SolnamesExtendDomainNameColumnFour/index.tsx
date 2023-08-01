import React from "react";

import { Button, Img, Text } from "components";

type SolnamesExtendDomainNameColumnFourProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "extenddomainnametext"
  | "oneyearbutton"
  | "amounttext"
  | "cdxcountertext"
  | "irreversibletext"
  | "continuebutton"
  | "cancelbutton"
> &
  Partial<{
    extenddomainnametext: string;
    oneyearbutton: string;
    amounttext: string;
    cdxcountertext: string;
    irreversibletext: string;
    continuebutton: string;
    cancelbutton: string;
  }>;

const SolnamesExtendDomainNameColumnFour: React.FC<
  SolnamesExtendDomainNameColumnFourProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[58px] items-center justify-start w-auto">
          <div className="flex flex-col items-center justify-start w-auto sm:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                size="txtInterMedium32"
              >
                {props?.extenddomainnametext}
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
          <div className="flex flex-col items-center justify-center py-2 w-full">
            <div className="flex flex-col items-start justify-end w-full">
              <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-8 py-5 rounded-[16px] w-full">
                <Button className="bg-gray-900_03 cursor-pointer font-inter py-[13px] rounded-[12px] text-center text-gray-100_01 text-xl w-full">
                  {props?.oneyearbutton}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[76px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-row gap-1 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-500 text-shadow-ts1 text-sm w-auto"
                  size="txtInterRegular14Gray500"
                >
                  {props?.amounttext}
                </Text>
              </div>
              <div className="flex flex-col h-[37px] md:h-auto items-center justify-end w-[275px]">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-right text-white-A700 tracking-[-0.90px] w-auto"
                    size="txtInterRegular30"
                  >
                    {props?.cdxcountertext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start w-auto sm:w-full">
            <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start w-auto sm:w-full">
              <Img className="h-5 w-5" src="images/img_file.svg" alt="file" />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                {props?.irreversibletext}
              </Text>
            </div>
            <div className="flex flex-col gap-[22px] items-start justify-start w-auto sm:w-full">
              <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[554px]">
                {props?.continuebutton}
              </Button>
              <Button className="border border-light_blue-A700 border-solid cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]">
                {props?.cancelbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesExtendDomainNameColumnFour.defaultProps = {
  extenddomainnametext: "Extend Domain Name",
  oneyearbutton: "1 year",
  amounttext: "Amount:",
  cdxcountertext: "0.98291 CDX",
  irreversibletext: "I understand that extending domain name is irreversible",
  continuebutton: "Continue",
  cancelbutton: "Cancel ",
};

export default SolnamesExtendDomainNameColumnFour;
