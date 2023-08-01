import React from "react";

import { Button, Img } from "components";

type DomainListFilterCloseFilterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "arrowrighticon"
> &
  Partial<{ userimage: string; arrowrighticon: string }>;

const DomainListFilterCloseFilter: React.FC<
  DomainListFilterCloseFilterProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="m-auto overflow-x-auto w-full">
          <div className="h-[60px] relative w-full">
            {!!props?.userimage ? (
              <div className="bg-gray-900_11 h-[60px] ml-auto my-auto rounded-[30px] w-full"></div>
            ) : null}
            {!!props?.arrowrighticon ? (
              <Button className="absolute bg-gray-900_12 flex h-7 inset-y-[0] items-center justify-center my-auto p-0.5 right-[27%] rounded-[5px] w-7">
                <Img
                  className="h-6"
                  alt="arrowright"
                  src="props?.arrowrighticon"
                />
              </Button>
            ) : null}
          </div>
        </div>
        <Img
          className="absolute h-6 inset-y-[0] left-[67%] my-auto w-[9px]"
          src="images/img_filter.svg"
          alt="filter"
        />
      </div>
    </>
  );
};

DomainListFilterCloseFilter.defaultProps = {};

export default DomainListFilterCloseFilter;
