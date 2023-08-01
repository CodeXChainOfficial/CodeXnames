import React from "react";

import { Text } from "components";

type HomepageStatProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "totaltransactions" | "totalamount" | "icon" | "todaycounter"
> &
  Partial<{
    totaltransactions: string;
    totalamount: string;
    icon: string;
    todaycounter: string;
  }>;

const HomepageStat: React.FC<HomepageStatProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-gray-500 text-sm w-full"
            size="txtInterRegular14Gray500"
          >
            {props?.totaltransactions}
          </Text>
        </div>
        <div className="h-[91px] relative w-full">
          <Text
            className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-A700 top-[2%] w-auto"
            size="txtRobotoRomanMedium32"
          >
            {props?.totalamount}
          </Text>
          <div className="absolute flex flex-1 flex-row gap-1 h-full inset-[0] items-start justify-start m-auto w-full">
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
              {props?.todaycounter}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageStat.defaultProps = {
  totaltransactions: "Total Transactions",
  totalamount: "412,245,098",
 // icon: "circle-plus",
  //todaycounter: "108,075 today",
};

export default HomepageStat;
