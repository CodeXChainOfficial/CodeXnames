import React from "react";

import { Img, Text } from "components";

type ViewDetailsOneSolnamesnavbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "nameproject" | "poweredbybictorOne" | "domains" | "resources" | "usertext"
> &
  Partial<{
    nameproject: string;
    poweredbybictorOne: string;
    domains: string;
    resources: string;
    usertext: string;
  }>;

const ViewDetailsOneSolnamesnavbar: React.FC<
  ViewDetailsOneSolnamesnavbarProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex mb-[3px] relative w-[14%] md:w-full">
          <Img
            className="h-[65px] ml-[undefinedpx] my-auto object-cover w-[45%] z-[1]"
            src="images/img_logo_65x86.png"
            alt="logo"
          />
          <Text
            className="ml-[-0.4px] mr-3.5 mt-[11px] text-white-A700 text-xl tracking-[-0.40px] z-[1]"
            size="txtInterSemiBold20"
          >
            {props?.nameproject}
          </Text>
          <Text
            className="mb-[9px] ml-[-0.4px] mt-auto text-white-A700 text-xs tracking-[-0.24px] z-[1]"
            size="txtInterSemiBold12"
          >
            {props?.poweredbybictorOne}
          </Text>
        </div>
        <div className="flex flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[744px] w-auto">
          <Text
            className="text-base text-center text-white-A700 w-auto"
            size="txtInterRegular16"
          >
            {props?.domains}
          </Text>
          <Text
            className="text-base text-center text-white-A700 w-auto"
            size="txtInterRegular16"
          >
            {props?.resources}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[62px] w-[14%] md:w-full">
          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-[184px]">
            <div className="border border-light_blue-A700 border-solid flex flex-col items-center justify-start px-[18px] py-2.5 rounded-lg shadow-bs w-[184px]">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                    src="images/img_rectangle2057.png"
                    alt="rectangle2057"
                  />
                  <Text
                    className="text-base text-blue_gray-100 w-auto"
                    size="txtInterMedium16"
                  >
                    {props?.usertext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ViewDetailsOneSolnamesnavbar.defaultProps = {
  nameproject: "SolNames",
  poweredbybictorOne: "Powered by Bictory",
  domains: "Domains",
  resources: "Resources",
  usertext: "0G345Bv...8hU",
};

export default ViewDetailsOneSolnamesnavbar;
