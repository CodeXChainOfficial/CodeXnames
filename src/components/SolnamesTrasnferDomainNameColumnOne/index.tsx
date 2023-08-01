import React from "react";

import { Button, Img, Input, Text } from "components";

type SolnamesTrasnferDomainNameColumnOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "domainname" | "language" | "text" | "transferdomain" | "canceltransfer"
> &
  Partial<{
    domainname: string;
    language: string;
    text: string;
    transferdomain: string;
    canceltransfer: string;
  }>;

const SolnamesTrasnferDomainNameColumnOne: React.FC<
  SolnamesTrasnferDomainNameColumnOneProps
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
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterMedium20WhiteA700"
            >
              {props?.language}
            </Text>
            <Input
              name="newownerwalletaddress"
              placeholder="0X347DHJ79WBSUR73BhJv8hjn"
              className="font-inter font-medium md:h-auto p-0 placeholder:text-blue_gray-100_01 sm:h-auto sm:px-5 text-blue_gray-100_01 text-left text-lg w-full"
              wrapClassName="bg-gray-900_04 border border-gray-900_09 border-solid pb-8 pl-6 pr-[35px] pt-[35px] rounded-[16px] w-full"
            ></Input>
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start w-auto sm:w-full">
            <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start w-auto sm:w-full">
              <Img className="h-5 w-5" src="images/img_file.svg" alt="file" />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                {props?.text}
              </Text>
            </div>
            <div className="flex flex-col gap-[22px] items-start justify-start w-auto sm:w-full">
              <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[554px]">
                {props?.transferdomain}
              </Button>
              <Button className="border border-light_blue-A700 border-solid cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]">
                {props?.canceltransfer}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesTrasnferDomainNameColumnOne.defaultProps = {
  domainname: "Transfer Domain name",
  language: "New owner’s wallet address ",
  text: "I understand that transferring domain is irreversible",
  transferdomain: "Transfer Domain",
  canceltransfer: "Cancel transfer",
};

export default SolnamesTrasnferDomainNameColumnOne;
