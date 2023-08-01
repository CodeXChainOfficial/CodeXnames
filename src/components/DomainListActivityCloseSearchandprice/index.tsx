import React from "react";

import { Img, Text } from "components";

type DomainListActivityCloseSearchandpriceProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "searchtext" | "pricetext"
> &
  Partial<{ searchtext: string; pricetext: string }>;

const DomainListActivityCloseSearchandprice: React.FC<
  DomainListActivityCloseSearchandpriceProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900_05 flex flex-row sm:gap-10 items-start justify-between p-[11px] rounded-[16px] w-[64%] md:w-full">
          <div className="flex flex-col items-start justify-start ml-[9px] mt-[9px] md:pr-10 sm:pr-5 pr-[98px] w-auto">
            <Text
              className="text-base text-blue_gray-300 w-auto"
              size="txtRobotoRegular16"
            >
              {props?.searchtext}
            </Text>
          </div>
          <Img
            className="h-6 mr-5 mt-2.5 w-6"
            src="images/img_search_blue_gray_300.svg"
            alt="search"
          />
        </div>
        <div className="bg-gray-900_05 flex flex-row items-center justify-between p-4 rounded-[16px] w-[35%] md:w-full">
          <div className="flex flex-col items-start justify-start ml-[3px] mt-1 md:pr-10 sm:pr-5 pr-[98px] w-auto">
            <Text
              className="text-base text-blue_gray-300 w-auto"
              size="txtRobotoRegular16"
            >
              {props?.pricetext}
            </Text>
          </div>
          <Img
            className="h-[9px] mr-[17px]"
            src="images/img_checkmark.svg"
            alt="checkmark"
          />
        </div>
      </div>
    </>
  );
};

DomainListActivityCloseSearchandprice.defaultProps = {
  searchtext: "Search domain name",
  pricetext: "Price",
};

export default DomainListActivityCloseSearchandprice;
