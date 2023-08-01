import React from "react";

import { Img, Input, Text } from "components";

type DomainListFilterAndActivityCloseSearchfullopenProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "searchdomainnamOne"
> &
  Partial<{ searchdomainnamOne: string }>;

const DomainListFilterAndActivityCloseSearchfullopen: React.FC<
  DomainListFilterAndActivityCloseSearchfullopenProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900_05 flex flex-row sm:gap-10 items-start justify-between mb-0.5 p-3.5 rounded-[16px] w-[69%] md:w-full">
          <div className="flex flex-col items-start justify-start ml-1.5 mt-1.5 md:pr-10 sm:pr-5 pr-[98px] w-auto">
            <Text
              className="text-base text-blue_gray-300 w-auto"
              size="txtRobotoRegular16"
            >
              {props?.searchdomainnamOne}
            </Text>
          </div>
          <Img
            className="h-6 mr-[31px] mt-1 w-6"
            src="images/img_search_blue_gray_300.svg"
            alt="search"
          />
        </div>
        <Input
          name="divmyTen"
          placeholder="Price"
          className="font-roboto leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
          wrapClassName="bg-gray-900_05 flex md:mt-0 mt-0.5 pb-4 pl-5 pr-[31px] pt-5 rounded-[16px] w-[30%] md:w-full"
          suffix={
            <div className="mt-[3px] mb-1.5 ml-[35px] sm:w-full sm:mx-0 w-[2%] bg-blue_gray-300">
              <Img
                className="my-auto"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </div>
          }
        ></Input>
      </div>
    </>
  );
};

DomainListFilterAndActivityCloseSearchfullopen.defaultProps = {
  searchdomainnamOne: "Search domain name",
};

export default DomainListFilterAndActivityCloseSearchfullopen;
