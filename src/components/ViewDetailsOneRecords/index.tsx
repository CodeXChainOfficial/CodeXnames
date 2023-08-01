import React from "react";

import { Text } from "components";

type ViewDetailsOneRecordsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "records" | "addresses" | "cdxaddress" | "ethereumaddress"
> &
  Partial<{
    records: string;
    addresses: string;
    cdxaddress: string;
    ethereumaddress: string;
  }>;

const ViewDetailsOneRecords: React.FC<ViewDetailsOneRecordsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-light_blue-600 text-xl"
            size="txtPlusJakartaSansRomanBold20"
          >
            {props?.records}
          </Text>
          <Text
            className="mt-[26px] text-lg text-white-A700"
            size="txtPlusJakartaSansSemiBold18WhiteA700"
          >
            {props?.addresses}
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[78px] items-start justify-start mt-[17px] w-full">
            <Text
              className="text-lg text-white-A700"
              size="txtPlusJakartaSansSemiBold18WhiteA700"
            >
              {props?.cdxaddress}
            </Text>
            <Text
              className="sm:mt-0 mt-0.5 text-base text-white-A700"
              size="txtPlusJakartaSansRomanRegular16"
            >
              {props?.ethereumaddress}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ViewDetailsOneRecords.defaultProps = {
  records: "Records",
  addresses: "Addresses",
  cdxaddress: "CDX Address",
  ethereumaddress: "0x8055691f39a37ff8832ea95c6052e2e4809C0A1e",
};

export default ViewDetailsOneRecords;
