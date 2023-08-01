import React from "react";

import { Button, Img, Line, Text } from "components";

type DomainClickOverViewColumnsaveOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userurl" | "userstatus" | "userprice" | "userlink" | "userbutton"
> &
  Partial<{
    userurl: string;
    userstatus: string;
    userprice: string;
    userlink: string;
    userbutton: string;
  }>;

const DomainClickOverViewColumnsaveOne: React.FC<
  DomainClickOverViewColumnsaveOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
          <Img
            className="h-4 md:mt-0 mt-4 w-4"
            src="images/img_save.svg"
            alt="save_One"
          />
          <Img
            className="h-[38px] md:h-auto md:ml-[0] ml-[42px] object-cover w-[39px] sm:w-full"
            src="images/img_codex12.png"
            alt="codexTwelve"
          />
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[11px] md:mt-0 mt-[11px] w-auto">
            <Text
              className="text-white-A700 text-xl w-[124px]"
              size="txtRobotoSemiBold20"
            >
              {props?.userurl}
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[61px] md:mt-0 mt-[11px] text-white-A700 text-xl"
            size="txtRobotoSemiBold20"
          >
            {props?.userstatus}
          </Text>
          <Text
            className="md:ml-[0] ml-[109px] md:mt-0 mt-[15px] text-white-A700 text-xl"
            size="txtRobotoSemiBold20"
          >
            {props?.userprice}
          </Text>
          <Text
            className="md:ml-[0] ml-[163px] md:mt-0 mt-3 text-white-A700 text-xl"
            size="txtRobotoSemiBold20"
          >
            {props?.userlink}
          </Text>
          <Button className="bg-light_blue-A700 cursor-pointer font-inter font-semibold min-w-[105px] md:ml-[0] ml-[134px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
            {props?.userbutton}
          </Button>
        </div>
        <Line className="bg-gray-700_0a h-px w-full" />
      </div>
    </>
  );
};

DomainClickOverViewColumnsaveOne.defaultProps = {
  userurl: "Ahmad.codex",
  userstatus: "Available",
  userprice: "$300/yr",
  userlink: "-",
  userbutton: "Buy now",
};

export default DomainClickOverViewColumnsaveOne;
