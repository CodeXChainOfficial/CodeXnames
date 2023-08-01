import React from "react";

import { Img, List, Text } from "components";

type ViewDetailsDatascProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "data"
  | "contractaddress"
  | "link0x57f1887af"
  | "tokenid"
  | "p939325483837235"
  | "chain"
  | "cdx"
  | "metadata"
  | "metadatalink"
  | "creationdate"
  | "timezone"
  | "registrationdate"
  | "timezoneOne"
> &
  Partial<{
    data: string;
    contractaddress: string;
    link0x57f1887af: string;
    tokenid: string;
    p939325483837235: string;
    chain: string;
    cdx: string;
    metadata: string;
    metadatalink: string;
    creationdate: string;
    timezone: string;
    registrationdate: string;
    timezoneOne: string;
  }>;

const ViewDetailsDatasc: React.FC<ViewDetailsDatascProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-white-A700 text-xl w-auto"
          size="txtPlusJakartaSansSemiBold20WhiteA700"
        >
          {props?.data}
        </Text>
        <Img
          className="h-px w-[448px]"
          src="images/img_divdivider.svg"
          alt="divdivider"
        />
        <List
          className="flex flex-col gap-3 items-center w-[99%]"
          orientation="vertical"
        >
          <div className="flex sm:flex-col flex-row gap-[47px] items-start justify-start w-auto sm:w-full">
            <Text
              className="text-base text-blue_gray-200 w-auto"
              size="txtPlusJakartaSansSemiBold16"
            >
              {props?.contractaddress}
            </Text>
            <div className="flex flex-row gap-[3.95px] items-center justify-start md:pr-10 sm:pr-5 pr-[70.05px] w-auto">
              <Text
                className="text-base text-light_blue-A700 w-auto"
                size="txtPlusJakartaSansSemiBold16LightblueA700"
              >
                {props?.link0x57f1887af}
              </Text>
              <Img
                className="h-3 w-3"
                src="images/img_mobile.svg"
                alt="mobile"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
            <Text
              className="text-base text-blue_gray-200 w-auto"
              size="txtPlusJakartaSansSemiBold16"
            >
              {props?.tokenid}
            </Text>
            <div className="flex flex-row gap-[3.98px] items-center justify-start md:pr-10 sm:pr-5 pr-[55.02px] w-auto">
              <Text
                className="text-base text-blue_gray-200 w-auto"
                size="txtPlusJakartaSansSemiBold16"
              >
                {props?.p939325483837235}
              </Text>
              <Img
                className="h-3 w-3"
                src="images/img_mobile.svg"
                alt="mobile"
              />
            </div>
          </div>
        </List>
        <div className="flex flex-row gap-[139px] items-start justify-start md:pr-10 sm:pr-5 pr-[234px] w-auto md:w-full">
          <Text
            className="text-base text-blue_gray-200 w-auto"
            size="txtPlusJakartaSansSemiBold16"
          >
            {props?.chain}
          </Text>
          <Text
            className="text-base text-blue_gray-200 w-auto"
            size="txtPlusJakartaSansSemiBold16"
          >
            {props?.cdx}
          </Text>
        </div>
        <div className="flex flex-row gap-[109px] items-start justify-between w-auto sm:w-full">
          <Text
            className="text-base text-blue_gray-200 w-auto"
            size="txtPlusJakartaSansSemiBold16"
          >
            {props?.metadata}
          </Text>
          <div className="flex flex-row gap-[3.92px] items-center justify-start md:pr-10 sm:pr-5 pr-[59.08px] w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-base text-light_blue-A700 w-auto"
                size="txtPlusJakartaSansSemiBold16LightblueA700"
              >
                {props?.metadatalink}
              </Text>
            </div>
            <Img className="h-3 w-3" src="images/img_mobile.svg" alt="mobile" />
          </div>
        </div>
        <div className="flex flex-row gap-[76px] items-start justify-start md:pr-10 sm:pr-5 pr-[76px] w-auto sm:w-full">
          <Text
            className="text-base text-blue_gray-200 w-auto"
            size="txtPlusJakartaSansSemiBold16"
          >
            {props?.creationdate}
          </Text>
          <Text
            className="text-base text-blue_gray-200 w-auto"
            size="txtPlusJakartaSansSemiBold16"
          >
            {props?.timezone}
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start md:pr-10 sm:pr-5 pr-[76px] w-auto sm:w-full">
          <Text
            className="text-base text-blue_gray-200 w-auto"
            size="txtPlusJakartaSansSemiBold16"
          >
            {props?.registrationdate}
          </Text>
          <Text
            className="text-base text-blue_gray-200 w-auto"
            size="txtPlusJakartaSansSemiBold16"
          >
            {props?.timezoneOne}
          </Text>
        </div>
      </div>
    </>
  );
};

ViewDetailsDatasc.defaultProps = {
  data: "Data",
  contractaddress: "Contract Address",
  link0x57f1887af: "0x57f1887...af147ea85",
  tokenid: "Token ID",
  p939325483837235: "939325483...837235284",
  chain: "Chain",
  cdx: "CDX",
  metadata: "Metadata",
  metadatalink: "https://metad...235284",
  creationdate: "Creation Date",
  timezone: "2022/09/06   07:05 UTC",
  registrationdate: "Registration Date",
  timezoneOne: "2022/09/06   07:05 UTC",
};

export default ViewDetailsDatasc;
