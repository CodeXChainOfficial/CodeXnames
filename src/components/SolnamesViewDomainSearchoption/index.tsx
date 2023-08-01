import React from "react";

import { Button, Img, Text } from "components";

type SolnamesViewDomainSearchoptionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "quickbuytext" | "price" | "cdxcountertext" | "pricetext"
> &
  Partial<{
    username: string;
    quickbuytext: string;
    price: string;
    cdxcountertext: string;
    pricetext: string;
  }>;

const SolnamesViewDomainSearchoption: React.FC<
  SolnamesViewDomainSearchoptionProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[67px] h-[242px] justify-start mt-7 p-[13px] rounded-[13px] w-[95%] md:w-full"
          style={{
            backgroundImage: "url('images/img_frame163262_242x315.png')",
          }}
        >
          <Button className="bg-gray-800_33 flex h-7 items-center justify-center md:ml-[0] ml-[252px] mr-[9px] p-1.5 rounded-[50%] w-7">
            <Img
              className="h-4"
              src="images/img_star_white_a700.svg"
              alt="star"
            />
          </Button>
          <Text
            className="mb-[95px] md:ml-[0] ml-[74px] mr-[114px] text-white-A700 text-xl"
            size="txtInterBold20"
          >
            {props?.username}
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
                  {props?.price}
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
                    {props?.pricetext}
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

SolnamesViewDomainSearchoption.defaultProps = {
  username: "Ahmad.nft",
  quickbuytext: "Quick buy",
  price: "Price",
  cdxcountertext: "25 CDX",
  pricetext: "$20",
};

export default SolnamesViewDomainSearchoption;
