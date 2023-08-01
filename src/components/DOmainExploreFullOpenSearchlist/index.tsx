import React from "react";

import { Img, Input, Text } from "components";

type DOmainExploreFullOpenSearchlistProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "createfromframe" | "pricetext" | "searchimage"
> &
  Partial<{ createfromframe: string; pricetext: string; searchimage: string }>;

const DOmainExploreFullOpenSearchlist: React.FC<
  DOmainExploreFullOpenSearchlistProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
          <Input
            name="groupTen"
            placeholder="Search domain name"
            className="font-roboto leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
            wrapClassName="bg-gray-900_05 sm:flex-1 pb-4 pl-5 pr-[35px] pt-5 rounded-[16px] sm:w-full"
          ></Input>
          {!!props?.createfromframe ? (
            <div className="h-14 relative w-[29%] sm:w-full">
              {!!props?.createfromframe ? (
                <div className="absolute bg-gray-900_05 h-14 inset-y-[0] left-[0] my-auto rounded-[16px] w-[66%]"></div>
              ) : null}
              <div className="absolute bottom-[29%] flex flex-row gap-4 items-start justify-center md:pr-10 sm:pr-5 pr-[98px] right-[0] w-auto">
                <Text
                  className="text-base text-blue_gray-300 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.pricetext}
                </Text>
                <Img
                  className="h-[9px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
            </div>
          ) : null}
          {!!props?.searchimage ? (
            <Img className="h-6" alt="search" src="props?.searchimage" />
          ) : null}
        </div>
      </div>
    </>
  );
};

DOmainExploreFullOpenSearchlist.defaultProps = { pricetext: "Price" };

export default DOmainExploreFullOpenSearchlist;
