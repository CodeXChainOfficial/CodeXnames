import React from "react";

import { Text } from "components";

type HomepageStataccounsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "totalaccounts" | "totalamount" | "icon" | "activetoday"
> &
  Partial<{
    totalaccounts: string;
    totalamount: string;
    icon: string;
    activetoday: string;
  }>;

const HomepageStataccouns: React.FC<HomepageStataccounsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[164px]">
          <Text
            className="text-gray-500 text-sm w-full"
            size="txtInterRegular14Gray500"
          >
            {props?.totalaccounts}
          </Text>
        </div>
        <div className="h-[91px] relative w-[145px]">
          <Text
            className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-A700 top-[2%] w-auto"
            size="txtRobotoRomanMedium32"
          >
            {props?.totalamount}
          </Text>
          <div className="absolute flex flex-row gap-1 h-full inset-[0] items-start justify-evenly m-auto w-auto">
            <div className="flex flex-col h-[91px] md:h-auto items-center justify-center w-5">
              <Text
                className="italic max-w-[16px] md:max-w-full text-base text-center text-light_blue-A700"
                size="txtRobotoItalicThin16"
              >
                {props?.icon}
              </Text>
            </div>
            <Text
              className="text-light_blue-A700_a2 text-xs w-auto"
              size="txtInterRegular12"
            >
              {props?.activetoday}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageStataccouns.defaultProps = {
  totalaccounts: "Total Accounts",
  totalamount: "2,019,570",
  //icon: "circle-bolt",
  //activetoday: "209,886 active today",
};

export default HomepageStataccouns;
