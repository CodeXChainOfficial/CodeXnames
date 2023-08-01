import React from "react";

import { Button, Img, Text } from "components";

type SolnamesTrasnferDomainNameOneSalecomingsoonProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "saledomainname"
  | "saleonbictory"
  | "domainaddress"
  | "irreversibletext"
  | "saledomain"
  | "canceltransfer"
  | "comingsoon"
> &
  Partial<{
    saledomainname: string;
    saleonbictory: string;
    domainaddress: string;
    irreversibletext: string;
    saledomain: string;
    canceltransfer: string;
    comingsoon: string;
  }>;

const SolnamesTrasnferDomainNameOneSalecomingsoon: React.FC<
  SolnamesTrasnferDomainNameOneSalecomingsoonProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gray-900_08 flex flex-col h-max inset-y-[0] items-center justify-start my-auto sm:px-5 px-[31px] py-[61px] right-[0] rounded-[24px] w-auto">
          <div className="flex flex-col gap-[58px] items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto sm:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtInterMedium32"
                >
                  {props?.saledomainname}
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
                {props?.saleonbictory}
              </Text>
              <div className="bg-gray-900_04 border border-gray-900_09 border-solid flex flex-col h-[88px] md:h-auto items-start justify-center sm:px-5 px-6 py-4 rounded-[16px] w-[548px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-100_01 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    {props?.domainaddress}
                  </Text>
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
                <div className="bg-light_blue-A700 flex flex-col h-[74px] md:h-auto items-center justify-center px-10 sm:px-5 py-4 rounded-[32px] w-[554px] sm:w-full">
                  <Text
                    className="text-center text-gray-900_03 text-xl w-auto"
                    size="txtInterBold20Gray90003"
                  >
                    {props?.saledomain}
                  </Text>
                </div>
                <Button className="border border-light_blue-A700 border-solid cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]">
                  {props?.canceltransfer}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[644px] inset-[0] justify-center m-auto w-[84%] md:w-full">
          <div className="absolute bg-gray-900_11_01 h-[644px] inset-[0] justify-center m-auto w-[99%]"></div>
          <div className="absolute bg-gray-900_08 flex flex-col h-max inset-y-[0] items-center justify-end my-auto p-[66px] md:px-10 sm:px-5 right-[0] rounded-[24px] w-[81%]">
            <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[345px]">
              {props?.comingsoon}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesTrasnferDomainNameOneSalecomingsoon.defaultProps = {
  saledomainname: "Sale Domain name",
  saleonbictory: "Sale on Bictory NFT Marketplace",
  domainaddress: "0X347DHJ79WBSUR73BhJv8hjn",
  irreversibletext: "I understand that trading domain is irreversible",
  saledomain: "Sale Domain",
  canceltransfer: "Cancel transfer",
  comingsoon: "Coming Soon",
};

export default SolnamesTrasnferDomainNameOneSalecomingsoon;
