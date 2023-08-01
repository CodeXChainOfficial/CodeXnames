import React from "react";

import { Button, Img, Text } from "components";

type SolnamesViewDomainSearchoption1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "weburl" | "quickbuytext" | "pricetext" | "cdxcountertext" | "priceonetext"
> &
  Partial<{
    weburl: string;
    quickbuytext: string;
    pricetext: string;
    cdxcountertext: string;
    priceonetext: string;
  }>;

const SolnamesViewDomainSearchoption1: React.FC<
  SolnamesViewDomainSearchoption1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[66px] h-[242px] justify-start mt-7 p-3.5 rounded-[13px] w-[95%] md:w-full"
          style={{
            backgroundImage: "url('images/img_frame163262_242x315.png')",
          }}
        >
          <Button className="bg-gray-800_33 flex h-7 items-center justify-center ml-64 md:ml-[0] mr-[3px] p-1.5 rounded-[50%] w-7">
            <Img
              className="h-4"
              src="images/img_star_white_a700.svg"
              alt="star"
            />
          </Button>
          <Text
            className="mb-[94px] md:ml-[0] ml-[62px] mr-[103px] text-white-A700 text-xl"
            size="txtInterBold20"
          >
            {props?.weburl}
          </Text>
        </div>
        <div className="flex flex-col gap-[17px] items-center justify-start mb-[3px] w-auto">
          <div className="flex flex-row gap-2 items-center justify-center w-[97px]">
            <Img
              className="h-[19px] w-[19px]"
              src="images/img_cloudlightning.svg"
              alt="cloudlightning"
            />
            <Text
              className="text-[14.19px] text-light_blue-A700 w-auto"
              size="txtInterMedium1419"
            >
              {props?.quickbuytext}
            </Text>
          </div>
          <div className="bg-gray-900_04 flex flex-col items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto">
            <div className="flex flex-row gap-[145px] items-center justify-between w-auto">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtInterMedium14"
                >
                  {props?.pricetext}
                </Text>
                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.cdxcountertext}
                  </Text>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtInterRegular14"
                  >
                    {props?.priceonetext}
                  </Text>
                </div>
              </div>
              <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesViewDomainSearchoption1.defaultProps = {
  weburl: "Ahmad.meta",
  quickbuytext: "Quick buy",
  pricetext: "Price",
  cdxcountertext: "25 CDX",
  priceonetext: "$20",
};

export default SolnamesViewDomainSearchoption1;
