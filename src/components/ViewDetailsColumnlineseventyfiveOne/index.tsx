import React from "react";

import { Button, Img, Line, Text } from "components";

type ViewDetailsColumnlineseventyfiveOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userurl"
  | "userduration"
  | "usercdxcounter"
  | "userlink10kclub"
  | "userbuynow"
> &
  Partial<{
    userurl: string;
    userduration: string;
    usercdxcounter: string;
    userlink10kclub: string;
    userbuynow: string;
  }>;

const ViewDetailsColumnlineseventyfiveOne: React.FC<
  ViewDetailsColumnlineseventyfiveOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
            <Img className="h-4 w-4" src="images/img_save.svg" alt="save" />
            <Img
              className="h-[38px] md:h-auto ml-10 md:ml-[0] object-cover w-[39px] sm:w-full"
              src="images/img_codex12.png"
              alt="codexTwelve"
            />
            <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] w-auto">
              <Text
                className="text-white-A700 text-xl w-[124px]"
                size="txtRobotoSemiBold20"
              >
                {props?.userurl}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[60px] text-white-A700 text-xl"
              size="txtRobotoSemiBold20"
            >
              {props?.userduration}
            </Text>
            <Text
              className="md:ml-[0] ml-[140px] text-center text-white-A700 text-xl"
              size="txtRobotoSemiBold20"
            >
              {props?.usercdxcounter}
            </Text>
            <Text
              className="md:ml-[0] ml-[159px] text-white-A700 text-xl"
              size="txtRobotoSemiBold20"
            >
              {props?.userlink10kclub}
            </Text>
            <Button className="bg-light_blue-A700 cursor-pointer font-inter font-semibold min-w-[105px] md:ml-[0] ml-[134px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
              {props?.userbuynow}
            </Button>
          </div>
          <Line className="bg-gray-700_0a h-px w-full" />
        </div>
        <Line className="bg-gray-700_0a h-px w-full" />
      </div>
    </>
  );
};

ViewDetailsColumnlineseventyfiveOne.defaultProps = {
  userurl: "Ahmad.codex",
  userduration: "1 Year",
  usercdxcounter: "25 CDX",
  userlink10kclub: "-",
  userbuynow: "Buy now",
};

export default ViewDetailsColumnlineseventyfiveOne;
