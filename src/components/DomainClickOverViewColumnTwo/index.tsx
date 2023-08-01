import React from "react";

import { Button, Img, Line, Text } from "components";

type DomainClickOverViewColumnTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "domainavailable" | "weburl" | "description" | "cdxcounter" | "buynow"
> &
  Partial<{
    domainavailable: string;
    weburl: string;
    description: JSX.Element | string;
    cdxcounter: string;
    buynow: string;
  }>;

const DomainClickOverViewColumnTwo: React.FC<
  DomainClickOverViewColumnTwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-4 h-[271px] md:h-auto items-start justify-start w-[599px] md:w-full">
            <Line className="bg-black-900_03 h-[3px] w-[17%]" />
            <Img
              className="h-1.5 w-[11px]"
              src="images/img_arrow2.svg"
              alt="arrowTwo"
            />
            <div className="flex flex-row gap-2.5 items-end justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_mail.svg"
                alt="mail_One"
              />
              <Text
                className="text-center text-light_blue-A700 text-sm w-auto"
                size="txtInterBold14"
              >
                {props?.domainavailable}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                size="txtInterMedium32"
              >
                {props?.weburl}
              </Text>
              <Text
                className="leading-[140.00%] max-w-[599px] md:max-w-full text-gray-500_02 text-xl"
                size="txtInterMedium20"
              >
                {props?.description}
              </Text>
            </div>
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              {props?.cdxcounter}
            </Text>
          </div>
          <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter h-[57px] py-[18px] rounded-[28px] text-base text-center text-gray-900_03 w-[270px]">
            {props?.buynow}
          </Button>
        </div>
      </div>
    </>
  );
};

DomainClickOverViewColumnTwo.defaultProps = {
  domainavailable: "Domain Available",
  weburl: "Ahmad.codex",
  description: (
    <>
      Whether you&#39;re an individual, a business, or a creator, Ahmad.codex
      empowers you to shape your online identity and engage with the global web3
      community. Establish
    </>
  ),
  cdxcounter: "25 CDX",
  buynow: "Buy Now",
};

export default DomainClickOverViewColumnTwo;
