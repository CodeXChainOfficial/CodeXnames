import React from "react";

import { Button, Img, Text } from "components";

type SolnamesViewDomainSearchoption2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "userquickbuy" | "userprice" | "usercdxcounter" | "userpriceone"
> &
  Partial<{
    username: string;
    userquickbuy: string;
    userprice: string;
    usercdxcounter: string;
    userpriceone: string;
  }>;

const SolnamesViewDomainSearchoption2: React.FC<
  SolnamesViewDomainSearchoption2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col gap-[57px] h-[242px] justify-start mt-7 p-[17px] rounded-[13px] w-[95%] md:w-full"
          style={{
            backgroundImage: "url('images/img_frame163262_242x315.png')",
          }}
        >
          <Button className="bg-gray-800_33 flex h-7 items-center justify-center md:ml-[0] ml-[253px] mt-1.5 p-1.5 rounded-[50%] w-7">
            <Img
              className="h-4"
              src="images/img_star_white_a700.svg"
              alt="star"
            />
          </Button>
          <Text
            className="mb-[91px] md:ml-[0] ml-[63px] mr-[104px] text-white-A700 text-xl"
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
              {props?.userquickbuy}
            </Text>
          </div>
          <div className="bg-gray-900_04 flex flex-col items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto">
            <div className="flex flex-row gap-[145px] items-center justify-between w-auto">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtInterMedium14"
                >
                  {props?.userprice}
                </Text>
                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    {props?.usercdxcounter}
                  </Text>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtInterRegular14"
                  >
                    {props?.userpriceone}
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

SolnamesViewDomainSearchoption2.defaultProps = {
  username: "Ahmad.404",
  userquickbuy: "Quick buy",
  userprice: "Price",
  usercdxcounter: "25 CDX",
  userpriceone: "$20",
};

export default SolnamesViewDomainSearchoption2;
