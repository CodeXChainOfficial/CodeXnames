import React from "react";

import { Button, Img, Text } from "components";

type DomainListFilterAndActivityCloseRowdurationProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ahmadCodex" | "duration" | "cdxcounter" | "buyNow"
> &
  Partial<{
    ahmadCodex: string;
    duration: string;
    cdxcounter: string;
    buyNow: string;
  }>;

const DomainListFilterAndActivityCloseRowduration: React.FC<
  DomainListFilterAndActivityCloseRowdurationProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[5px] items-center justify-start p-[11px] w-3/5 md:w-full">
          <Img
            className="h-4 md:h-auto ml-[54px] object-cover w-4"
            src="images/img_codex12.png"
            alt="codexTwelve"
          />
          <div className="flex flex-col items-center justify-start mb-0.5 w-auto">
            <Button className="bg-transparent cursor-pointer font-roboto font-semibold min-w-[87px] py-[5px] text-center text-sm text-white-A700">
              {props?.ahmadCodex}
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end p-4">
          <Text
            className="text-sm text-white-A700"
            size="txtPlusJakartaSansSemiBold14"
          >
            {props?.duration}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end p-4">
          <Text
            className="text-sm text-white-A700"
            size="txtPlusJakartaSansSemiBold14"
          >
            {props?.cdxcounter}
          </Text>
        </div>
        <Button className="bg-light_blue-A700 cursor-pointer font-inter font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
          {props?.buyNow}
        </Button>
      </div>
    </>
  );
};

DomainListFilterAndActivityCloseRowduration.defaultProps = {
  ahmadCodex: "Ahmad.codex",
  duration: "1 Year",
  cdxcounter: "25 cdx",
};

export default DomainListFilterAndActivityCloseRowduration;
