import React from "react";

import { Button, Img, Text } from "components";

type SolnamesDomainDetailsDomainlogoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userurl" | "userprice" | "usercdx" | "userpricevalue"
> &
  Partial<{
    userurl: string;
    userprice: string;
    usercdx: string;
    userpricevalue: string;
  }>;

const SolnamesDomainDetailsDomainlogo: React.FC<
  SolnamesDomainDetailsDomainlogoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[65px] h-[242px] justify-start mt-7 p-[15px] rounded-[13px] w-[95%] md:w-full"
          style={{
            backgroundImage: "url('images/img_frame163262_242x315.png')",
          }}
        >
          <Button className="bg-gray-800_33 flex h-7 items-center justify-center md:ml-[0] ml-[254px] mr-[3px] p-1.5 rounded-[50%] w-7">
            <Img
              className="h-4"
              src="images/img_star_white_a700.svg"
              alt="star"
            />
          </Button>
          <Text
            className="mb-[93px] md:ml-[0] ml-[51px] mr-[101px] text-white-A700 text-xl"
            size="txtInterBold20"
          >
            {props?.userurl}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[3px] w-auto">
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
                    {props?.usercdx}
                  </Text>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtInterRegular14"
                  >
                    {props?.userpricevalue}
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

SolnamesDomainDetailsDomainlogo.defaultProps = {
  userurl: "Ahmad.codex",
  userprice: "Price",
  usercdx: "25 CDX",
  userpricevalue: "$20",
};

export default SolnamesDomainDetailsDomainlogo;
