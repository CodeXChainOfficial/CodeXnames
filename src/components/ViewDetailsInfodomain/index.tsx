import React from "react";

import { Text } from "components";

type ViewDetailsInfodomainProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "expirationdate"
  | "p6sep2023"
  | "collection"
  | "none"
  | "digit"
  | "characterset"
  | "length"
  | "length1"
> &
  Partial<{
    expirationdate: string;
    p6sep2023: string;
    collection: string;
    none: string;
    digit: string;
    characterset: string;
    length: string;
    length1: string;
  }>;

const ViewDetailsInfodomain: React.FC<ViewDetailsInfodomainProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="gap-4 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
            <div className="bg-blue_gray-900 flex flex-1 flex-col gap-1 h-[84px] md:h-auto items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[82px] py-3.5 rounded-[16px] w-full">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtPlusJakartaSansSemiBold16Bluegray400"
              >
                {props?.expirationdate}
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtPlusJakartaSansSemiBold20WhiteA700"
              >
                {props?.p6sep2023}
              </Text>
            </div>
            <div className="bg-blue_gray-900 flex flex-1 flex-col gap-1 h-[84px] md:h-auto items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[119px] py-3.5 rounded-[16px] w-full">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtPlusJakartaSansSemiBold16Bluegray400"
              >
                {props?.collection}
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtPlusJakartaSansSemiBold20WhiteA700"
              >
                {props?.none}
              </Text>
            </div>
            <div className="bg-blue_gray-900 flex flex-1 flex-col gap-1 h-[84px] md:h-auto items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[92px] py-3.5 rounded-[16px] w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtPlusJakartaSansSemiBold20WhiteA700"
              >
                {props?.digit}
              </Text>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtPlusJakartaSansSemiBold16Bluegray400"
              >
                {props?.characterset}
              </Text>
            </div>
            <div className="bg-blue_gray-900 flex flex-1 flex-col gap-1 h-[84px] md:h-auto items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[145px] py-3.5 rounded-[16px] w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtPlusJakartaSansSemiBold20WhiteA700"
              >
                {props?.length}
              </Text>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtPlusJakartaSansSemiBold16Bluegray400"
              >
                {props?.length1}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ViewDetailsInfodomain.defaultProps = {
  expirationdate: "Expiration Date",
  p6sep2023: "6 Sep, 2023",
  collection: "Collection",
  none: "None",
  digit: "digit",
  characterset: "Character Set",
  length: "6",
  length1: "Length",
};

export default ViewDetailsInfodomain;
