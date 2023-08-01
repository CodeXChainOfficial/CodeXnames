import React from "react";

import { Line, List, Text } from "components";

type SolnamesDomainDetailsColumnTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "weburlTwo"
  | "domainpurchasedOne"
  | "domaininformatiOne"
  | "domainname"
  | "weburlThree"
  | "owner"
  | "p0x347dhj79wbsurone"
  | "editor"
  | "p0x347dhj79wbsurone1"
  | "registrant"
  | "p0x782hdghe8hjwbone"
  | "resolver"
  | "defaultresolverOne"
  | "expirationdate"
  | "p250308180821"
> &
  Partial<{
    weburlTwo: string;
    domainpurchasedOne: string;
    domaininformatiOne: string;
    domainname: string;
    weburlThree: string;
    owner: string;
    p0x347dhj79wbsurone: string;
    editor: string;
    p0x347dhj79wbsurone1: string;
    registrant: string;
    p0x782hdghe8hjwbone: string;
    resolver: string;
    defaultresolverOne: string;
    expirationdate: string;
    p250308180821: string;
  }>;

const SolnamesDomainDetailsColumnTwo: React.FC<
  SolnamesDomainDetailsColumnTwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtInterBold20"
          >
            {props?.weburlTwo}
          </Text>
          <Text
            className="text-gray-500_01 text-sm w-auto"
            size="txtInterMedium14Gray50001"
          >
            {props?.domainpurchasedOne}
          </Text>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start max-w-[636px] w-full">
          <Text
            className="text-light_blue-600 text-shadow-ts text-sm w-auto"
            size="txtInterBold14Lightblue600"
          >
            {props?.domaininformatiOne}
          </Text>
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-[59px] items-start justify-start w-auto">
              <Text
                className="text-base text-gray-600 w-[110px]"
                size="txtInterRegular16Gray600"
              >
                {props?.domainname}
              </Text>
              <Text
                className="text-blue_gray-100_01 text-lg w-auto"
                size="txtInterMedium18"
              >
                {props?.weburlThree}
              </Text>
            </div>
            <List
              className="flex flex-col gap-2 w-[92%]"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row gap-[59px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-600 w-[54px]"
                  size="txtInterRegular16Gray600"
                >
                  {props?.owner}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-100_01 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    {props?.p0x347dhj79wbsurone}
                  </Text>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-900_01 w-full" />
              <div className="flex sm:flex-col flex-row gap-[59px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-600 w-12"
                  size="txtInterRegular16Gray600"
                >
                  {props?.editor}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-100_01 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    {props?.p0x347dhj79wbsurone1}
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex sm:flex-col flex-row gap-[59px] items-start justify-start w-auto sm:w-full">
              <Text
                className="text-base text-gray-600 w-[81px]"
                size="txtInterRegular16Gray600"
              >
                {props?.registrant}
              </Text>
              <Text
                className="text-blue_gray-100_01 text-lg w-auto"
                size="txtInterMedium18"
              >
                {props?.p0x782hdghe8hjwbone}
              </Text>
            </div>
            <div className="flex flex-row gap-[59px] items-start justify-start w-auto sm:w-full">
              <Text
                className="text-base text-gray-600 w-[69px]"
                size="txtInterRegular16Gray600"
              >
                {props?.resolver}
              </Text>
              <Text
                className="text-blue_gray-100_01 text-lg w-auto"
                size="txtInterMedium18"
              >
                {props?.defaultresolverOne}
              </Text>
            </div>
            <div className="flex flex-row gap-[59px] items-start justify-start w-auto sm:w-full">
              <Text
                className="text-base text-gray-600 w-[117px]"
                size="txtInterRegular16Gray600"
              >
                {props?.expirationdate}
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-100_01 text-lg w-auto"
                  size="txtInterMedium18"
                >
                  {props?.p250308180821}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesDomainDetailsColumnTwo.defaultProps = {
  weburlTwo: "Ahmad.codex",
  domainpurchasedOne: "Domain purchased by you.",
  domaininformatiOne: "Domain information",
  domainname: "Domain Name:",
  weburlThree: "Ahmad.codex",
  owner: "Owner:",
  p0x347dhj79wbsurone: "0X347DHJ79WBSUR73BhJv8hjn",
  editor: "Editor:",
  p0x347dhj79wbsurone1: "0X347DHJ79WBSUR73BhJv8hjn",
  registrant: "Registrant:",
  p0x782hdghe8hjwbone: "0X782HDghe8HjWBSonfBhJWQp",
  resolver: "Resolver:",
  defaultresolverOne: "Default Resolver",
  expirationdate: "Expiration date:",
  p250308180821: "25:03:08 - 18/08/21",
};

export default SolnamesDomainDetailsColumnTwo;
