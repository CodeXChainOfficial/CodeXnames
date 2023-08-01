import React from "react";

import { Img, Text } from "components";

type SolnamesViewDomainColumnmailOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "domainavailableOne" | "userurl" | "userdescription" | "usercdxcounter"
> &
  Partial<{
    domainavailableOne: string;
    userurl: string;
    userdescription: JSX.Element | string;
    usercdxcounter: string;
  }>;

const SolnamesViewDomainColumnmailOne: React.FC<
  SolnamesViewDomainColumnmailOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-end justify-start w-auto">
          <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail_One" />
          <Text
            className="text-center text-light_blue-A700 text-sm w-auto"
            size="txtInterBold14"
          >
            {props?.domainavailableOne}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
            size="txtInterMedium32"
          >
            {props?.userurl}
          </Text>
          <Text
            className="leading-[140.00%] max-w-[599px] md:max-w-full text-gray-500_02 text-xl"
            size="txtInterMedium20"
          >
            {props?.userdescription}
          </Text>
        </div>
        <Text
          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
          size="txtInterSemiBold24"
        >
          {props?.usercdxcounter}
        </Text>
      </div>
    </>
  );
};

SolnamesViewDomainColumnmailOne.defaultProps = {
  domainavailableOne: "Domain Available",
  userurl: "Ahmad.codex",
  userdescription: (
    <>
      Whether you&#39;re an individual, a business, or a creator, Ahmad.codex
      empowers you to shape your online identity and engage with the global web3
      community. Establish
    </>
  ),
  usercdxcounter: "25 CDX",
};

export default SolnamesViewDomainColumnmailOne;
